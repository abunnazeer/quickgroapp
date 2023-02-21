const mongoose = require('mongoose');

const farmSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: [true, 'please add your locatio'],
    },
    coordinates: {
      type: [Number],
      index: '2dsphere',
    },
    size: {
      type: Number,
      required: [true, 'The size of farm cannot be empty'],
    },
    certificateOfRegistration: {
      type: String,
      required: [true, 'You Must provide a certificate of registration'],
    },
    userID: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Farm', farmSchema);
