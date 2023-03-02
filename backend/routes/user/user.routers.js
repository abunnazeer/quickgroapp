const express = require('express');
const {
  register,
  login,
  protect,
  restrictTo,
  forgetPassword,
  resetPassword,
} = require('./user.controller');
const { updateProfile } = require('./profile.controller');

const router = express();
router.post('/register', register);
router.post('/login', login);
router.patch(
  '/update-profile/:id',
  protect,
  restrictTo('admin', 'farmer'),
  updateProfile
);

router.post('/forget-password', forgetPassword);
router.patch('/reset-password/:token', resetPassword);

// router.delete('/update-profile/:id', protect, updateProfile);

module.exports = router;
