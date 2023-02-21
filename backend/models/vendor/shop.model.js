const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please shop name is required'],
    unique: [true, 'This field is unique'],
  },
  location: {
    type: String,
    required: [true, 'please add your location'],
  },
  imageLogo: {
    type: String,
  },
  address: {
    type: String,
    required: [true, 'please add your shop address'],
  },
  certificateOfRegistration: {
    type: String,
    required: [true, 'You Must provide a certificate of registration'],
  },
  userID: {
    type: String,
  },
});

module.exports = mongoose.model('Shop', shopSchema);
