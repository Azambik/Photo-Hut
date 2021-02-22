const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Photo, User, Comment, Vote } = require('../../models');
const withAuth = require('../../utils/auth');

//gets a all photo
router.get('/', (req, res) => {
  console.log('======================');
  Photo.findAll({
    attributes: [
      'id',
      'photo_url',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE photo.id = vote.photo_id)'), 'vote_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'photo_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPhotoData => res.json(dbPhotoData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
//gets a single photo
router.get('/:id', (req, res) => {
  Photo.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'photo_url',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE photo.id = vote.photo_id)'), 'vote_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'photo_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPhotoData => {
      if (!dbPhotoData) {
        res.status(404).json({ message: 'No photo found with this id' });
        return;
      }
      res.json(dbPhotoData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
//creates a photo


router.post('/', withAuth, (req, res) => {
  Photo.create({
    title: req.body.title,
    photo_url: req.body.photo_url,
    // used for testing user_id: req.body.user_id
    user_id: req.session.user_id
  })
    .then(dbPhotoData => res.json(dbPhotoData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
//sets upvote to a photo

router.put('/upvote', withAuth, (req, res) => {
  Photo.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
    .then(updatedVoteData => res.json(updatedVoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
//updates a photo

router.put('/:id', withAuth, (req, res) => {
  Photo.update(
    {
      title: req.body.title,
      photo_url: req.body.photo_url
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPhotoData => {
      if (!dbPhotoData) {
        res.status(404).json({ message: 'No photo found with this id' });
        return;
      }
      res.json(dbPhotoData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
//deletes a photo
router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Photo.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPhotoData => {
      if (!dbPhotoData) {
        res.status(404).json({ message: 'No photo found with this id' });
        return;
      }
      res.json(dbPhotoData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
