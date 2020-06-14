const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  id:{
    type: String,
    required: false

  },
  name: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  available: {
    type: Boolean,
    required: true,
    default: true
  }
});

module.exports = mongoose.model('Books',BookSchema);
