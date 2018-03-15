var mongoose = require('mongoose');
var Listing = require('../models/listing');

mongoose.connect('mongodb://localhost/caveBnb');

var caves = [
  {
    name: 'Rock Cave',
    location: 'Big Rock',
    img: '/img/cave1-matty-adame.jpg',
    price: 85,
    rating: 3.7,
    ooos: ['Sky', 'Meat'],
    hostName: 'Khog',
    hostImg: ''
  },
  {
    name: 'Cave Rock',
    location: 'Many Tree',
    img: '/img/cave3-josh-feiber.jpg',
    price: 232,
    rating: 4.2,
    ooos: ['Rock', 'Safe', 'Pelt'],
    hostName: 'Dhikk',
    hostImg: ''
  },
  {
    name: 'Water Cave',
    location: 'Big Water',
    img: '/img/cave5-natalie-acheatel.jpg',
    price: 442,
    rating: 3.4,
    ooos: ['Tool', 'Wood', 'Wheel'],
    hostName: 'Khik',
    hostImg: ''
  },
  {
    name: 'Hot Cave',
    location: 'Little Water',
    img: '/img/cave7-andrea-sonda.jpg',
    price: 200,
    rating: 3.4,
    ooos: ['Sky', 'Safe', 'Rock', 'Water'],
    hostName: 'Bhoonkud',
    hostImg: ''
  },
  {
    name: 'Cave Big Sound',
    location: 'Big Rock',
    img: '/img/cave6-joshua-sortino.jpg',
    price: 544,
    rating: 4.9,
    ooos: ['Water', 'Rock', 'Fire', 'Meat'],
    hostName: 'Dudvork',
    hostImg: ''
  },
  {
    name: 'Fire Cave',
    location: 'Big Water',
    img: '/img/cave9-justin-roy.jpg',
    price: 483,
    rating: 4.0,
    ooos: ['Fire', 'Sky', 'Meat', 'Wheel'],
    hostName: 'Gognat',
    hostImg: ''
  },
  {
    name: 'Tree Cave',
    location: 'Many Tree',
    img: '/img/cave2-ksenia-kudelkina.jpg',
    price: 483,
    rating: 4.0,
    ooos: ['Wood', 'Pelt', 'Safe'],
    hostName: 'Skulgu',
    hostImg: ''
  },
  {
    name: 'Black Cave',
    location: 'Little Water',
    img: '/img/cave4-josh-murillo.jpg',
    price: 147,
    rating: 3.0,
    ooos: ['Sky', 'Tool', 'Pelt'],
    hostName: 'Terkob',
    hostImg: ''
  },
  {
    name: 'Green Cave',
    location: 'Big Water',
    img: '/img/cave6-joshua-sortino.jpg',
    price: 356,
    rating: 4.3,
    ooos: ['Safe', 'Wheel', 'Sky'],
    hostName: 'Irbod',
    hostImg: ''
  },
  {
    name: 'Art Cave',
    location: 'Many Tree',
    img: '/img/cave8-jacob-aguilar.jpg',
    price: 99,
    rating: 2.9,
    ooos: ['Rock', 'Fire', 'Sky'],
    hostName: 'Kronoot',
    hostImg: ''
  },
  {
    name: 'Cave Hole',
    location: 'Big Rock',
    img: '/img/cave10-andreas-vendelbo.jpg',
    price: 776,
    rating: 4.8,
    ooos: ['Water', 'Fire', 'Tool'],
    hostName: 'Dovkuc',
    hostImg: ''
  },
  {
    name: 'Wet Cave',
    location: 'Little Water',
    img: '/img/cave1-matty-adame.jpg',
    price: 118,
    rating: 3.4,
    ooos: ['Water'],
    hostName: 'Sciaclu',
    hostImg: ''
  },
  {
    name: 'Cold Cave',
    location: 'Big Water',
    img: '/img/cave3-josh-feiber.jpg',
    price: 404,
    rating: 4.3,
    ooos: ['Rock', 'Wheel', 'Water'],
    hostName: 'Erbeb',
    hostImg: ''
  },
  {
    name: 'Cave No Sound',
    location: 'Many Tree',
    img: '/img/cave5-natalie-acheatel.jpg',
    price: 278,
    rating: 4.9,
    ooos: ['Safe', 'Pelt'],
    hostName: 'Gafraih',
    hostImg: ''
  },
  {
    name: 'Cave Slime',
    location: 'Big Rock',
    img: '/img/cave7-andrea-sonda.jpg',
    price: 200,
    rating: 3.8,
    ooos: ['Tool', 'Wood', 'Rock'],
    hostName: 'Lalat',
    hostImg: ''
  },
  {
    name: 'Dirt Cave',
    location: 'Little Water',
    img: '/img/cave9-justin-roy.jpg',
    price: 652,
    rating: 4.3,
    ooos: ['Water', 'Sky', 'Meat'],
    hostName: 'Aimlok',
    hostImg: ''
  },
  {
    name: 'Red Cave',
    location: 'Big Rock',
    img: '/img/cave2-ksenia-kudelkina.jpg',
    price: 489,
    rating: 3.7,
    ooos: ['Rock', 'Wood', 'Wheel'],
    hostName: 'Loegge',
    hostImg: ''
  },
  {
    name: 'Old Cave',
    location: 'Many Tree',
    img: '/img/cave4-josh-murillo.jpg',
    price: 217,
    rating: 4.0,
    ooos: ['Safe', 'Pelt', 'Tool'],
    hostName: 'Zorub',
    hostImg: ''
  },
  {
    name: 'New Cave',
    location: 'Big Water',
    img: '/img/cave6-joshua-sortino.jpg',
    price: 333,
    rating: 4.4,
    ooos: ['Safe'],
    hostName: 'Skunzel',
    hostImg: ''
  },
  {
    name: 'Angry Cave',
    location: 'Big Rock',
    img: '/img/cave8-jacob-aguilar.jpg',
    price: 700,
    rating: 4.6,
    ooos: ['Rock', 'Wheel', 'Fire'],
    hostName: 'Zaga',
    hostImg: ''
  },
  {
    name: 'Cave Sad',
    location: 'Little Water',
    img: '/img/cave10-andreas-vendelbo.jpg',
    price: 517,
    rating: 4.4,
    ooos: ['Meat', 'Wheel', 'Water'],
    hostName: 'Zide',
    hostImg: ''
  },
  {
    name: 'Blue Cave',
    location: 'Big Water',
    img: '/img/cave1-matty-adame.jpg',
    price: 840,
    rating: 4.0,
    ooos: ['Safe', 'Sky', 'Water'],
    hostName: 'Fleko',
    hostImg: ''
  },
  {
    name: 'Smell Cave',
    location: 'Little Water',
    img: '/img/cave3-josh-feiber.jpg',
    price: 89,
    rating: 3.8,
    ooos: ['Wheel', 'Pelt'],
    hostName: 'Thonde',
    hostImg: ''
  },
  {
    name: 'Deep Cave',
    location: 'Many Tree',
    img: '/img/cave2-ksenia-kudelkina.jpg',
    price: 500,
    rating: 3.1,
    ooos: ['Sky', 'Meat', 'Fire'],
    hostName: 'Safroe',
    hostImg: ''
  }
];

caves.forEach(cave => {
  console.log("adding a cave...")
  Listing.create(
    {
      name: cave.name,
      location: cave.location,
      img: cave.img,
      price: cave.price,
      rating: cave.rating,
      ooos: cave.ooos,
      hostName: cave.hostName,
      hostImg: cave.hostImg
    }, (err, listing) => {
      if (err) {
        return console.log(err);
      } else {
        return console.log(listing);
      }
    }
  )
});
