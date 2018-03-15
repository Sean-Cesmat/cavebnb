var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Listing = require('../models/listing');


router.get('/:location', (req, res) => {
  let location = ''
  if (req.params.location === 'big-rock') {
    location = 'Big Rock'
  } else if (req.params.location === 'little-water') {
    location = 'Little Water'
  } else if (req.params.location === 'big-water') {
    location = 'Big Water'
  } else {
    location = 'Many Tree'
  }
  Listing.find({ location }, function(err, location) {
    if (err) {
      console.log(`Got an error finding the listings: ${err}`)
    } else {
      console.log(location)
      res.send(location)
    }
  })
})

router.get('/cave/:id', (req, res) => {
  Listing.find({ '_id': req.params.id }, function(err, listing) {
    if (err) {
      console.log(`Got an error finding the listing: ${err}`)
    } else {
      console.log(listing)
      res.send(listing)
    }
  })
})

module.exports = router;
