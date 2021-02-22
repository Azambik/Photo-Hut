const { Photo } = require('../models');

const photodata = [
    {
        title: 'Donec posuere metus vitae ipsum.',
        photo_url: 'https://picsum.photos/200/300',
        user_id: 7
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        photo_url: 'https://picsum.photos/200/400',
        user_id: 7
    },
    {
        title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        photo_url: 'https://picsum.photos/400/200',
        user_id: 7
    },
    {
        title: 'Nunc purus.',
        photo_url: 'https://picsum.photos/800',
        user_id: 7
    },
    {
        title: 'Pellentesque eget nunc.',
        photo_url: 'https://picsum.photos/1000',
        user_id: 7
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        photo_url: 'https://picsum.photos/200/1000',
        user_id: 7
    },
    {
        title: 'In hac habitasse platea dictumst.',
        photo_url: 'https://picsum.photos/700/500',
        user_id: 7
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        photo_url: 'https://picsum.photos/800/900',
        user_id: 7
    },
    {
        title: 'Duis ac nibh.',
        photo_url: 'https://picsum.photos/100/70',
        user_id: 7
    },
    {
        title: 'Curabitur at ipsum ac tellus semper interdum.',
        photo_url: 'https://picsum.photos/500/300',
        user_id: 7
    },
    {
        title: 'In hac habitasse platea dictumst.',
        photo_url: 'https://picsum.photos/600',
        user_id: 7
    },
    {
        title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
        photo_url: 'https://picsum.photos/120/500',
        user_id: 10
    },
    {
        title: 'Donec dapibus.',
        photo_url: 'https://picsum.photos/700/200',
        user_id: 8
    },
    {
        title: 'Nulla tellus.',
        photo_url: 'https://picsum.photos/400/900',
        user_id: 3
    },
    {
        title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
        photo_url: 'https://picsum.photos/900/800',
        user_id: 3
    },
    {
        title:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
        photo_url: 'https://picsum.photos/400/500',
        user_id: 7
    },
    {
        title: 'In hac habitasse platea dictumst.',
        photo_url: 'https://picsum.photos/200/500',
        user_id: 6
    },
    {
        title: 'Etiam justo.',
        photo_url: 'https://picsum.photos/600/300',
        user_id: 4
    },
    {
        title: 'Nulla ut erat id mauris vulputate elementum.',
        photo_url: 'https://picsum.photos/1000/900',
        user_id: 6
    },
    {
        title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        photo_url: 'https://picsum.photos/400/850',
        user_id: 7
    }
];

const seedPhotos = () => Photo.bulkCreate(photodata);

module.exports = seedPhotos;
