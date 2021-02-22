const { Vote } = require('../models');

const votedata = [
  {
    user_id: 9,
    photo_id: 19
  },
  {
    user_id: 1,
    photo_id: 8
  },
  {
    user_id: 8,
    photo_id: 12
  },
  {
    user_id: 8,
    photo_id: 19
  },
  {
    user_id: 9,
    photo_id: 3
  },
  {
    user_id: 3,
    photo_id: 16
  },
  {
    user_id: 4,
    photo_id: 7
  },
  {
    user_id: 10,
    photo_id: 7
  },
  {
    user_id: 3,
    photo_id: 18
  },
  {
    user_id: 9,
    photo_id: 16
  },
  {
    user_id: 3,
    photo_id: 17
  },
  {
    user_id: 10,
    photo_id: 2
  },
  {
    user_id: 6,
    photo_id: 10
  },
  {
    user_id: 5,
    photo_id: 11
  },
  {
    user_id: 6,
    photo_id: 1
  },
  {
    user_id: 9,
    photo_id: 18
  },
  {
    user_id: 6,
    photo_id: 15
  },
  {
    user_id: 6,
    photo_id: 7
  },
  {
    user_id: 6,
    photo_id: 4
  },
  {
    user_id: 1,
    photo_id: 16
  },
  {
    user_id: 10,
    photo_id: 18
  },
  {
    user_id: 4,
    photo_id: 10
  },
  {
    user_id: 10,
    photo_id: 5
  },
  {
    user_id: 5,
    photo_id: 16
  },
  {
    user_id: 6,
    photo_id: 17
  },
  {
    user_id: 1,
    photo_id: 15
  },
  {
    user_id: 7,
    photo_id: 13
  },
  {
    user_id: 6,
    photo_id: 3
  },
  {
    user_id: 6,
    photo_id: 13
  },
  {
    user_id: 7,
    photo_id: 1
  },
  {
    user_id: 4,
    photo_id: 15
  },
  {
    user_id: 2,
    photo_id: 18
  },
  {
    user_id: 9,
    photo_id: 10
  },
  {
    user_id: 10,
    photo_id: 15
  },
  {
    user_id: 8,
    photo_id: 1
  },
  {
    user_id: 10,
    photo_id: 8
  },
  {
    user_id: 2,
    photo_id: 13
  },
  {
    user_id: 9,
    photo_id: 20
  },
  {
    user_id: 1,
    photo_id: 17
  },
  {
    user_id: 10,
    photo_id: 9
  },
  {
    user_id: 10,
    photo_id: 3
  },
  {
    user_id: 5,
    photo_id: 6
  },
  {
    user_id: 6,
    photo_id: 12
  },
  {
    user_id: 5,
    photo_id: 2
  },
  {
    user_id: 6,
    photo_id: 14
  },
  {
    user_id: 8,
    photo_id: 18
  },
  {
    user_id: 3,
    photo_id: 4
  }
];

const seedVotes = () => Vote.bulkCreate(votedata);

module.exports = seedVotes;
