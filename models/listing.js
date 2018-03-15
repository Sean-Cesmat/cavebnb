const mongoose = require('mongoose');

var listingSchema = new mongoose.Schema({
  name: {
    type: String
  },
  location: {
    type: String
  },
  img: {
    type: String
  },
  price: {
    type: Number
  },
  rating: {
    type: Number
  },
  ooos: {
    type: Array
  },
  hostName: {
    type: String
  },
  hostImg: {
    type: String
  }
})

listingSchema.set('toJSON', {
  transform: function(doc, ret, options) {
    let returnJson = {
      _id: ret._id,
      name: ret.name,
      location: ret.location,
      img: ret.img,
      price: ret.price,
      rating: ret.rating,
      ooos: ret.ooos,
      hostName: ret.hostName,
      hostImg: ret.hostImg
    }
    return returnJson
  }
})

var Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
