const express = require('express');
const { register, login, protect } = require('./user.controller');
const { updateProfile } = require('./profile.controller');

const router = express();
router.post('/register', register);
router.post('/login', login);
router.patch('/update-profile/:id', protect, updateProfile);
// router.delete('/update-profile/:id', protect, updateProfile);

module.exports = router;
