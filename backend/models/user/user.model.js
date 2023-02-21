const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
  // name: {
  //   type: String,
  //   required: [true, 'Your full name'],
  // },
  email: {
    type: String,
    required: [true, 'please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'please provide  a valid email'],
  },

  password: {
    type: String,
    required: [true, 'please provide a password'],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'please confirm your password'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'passwords not match!',
    },
    passwordChangedAt: Date,
  },
  role: {
    type: String,
    enum: ['user', 'farmer', 'vendor', 'investor', 'admin'],
    default: 'user',
  },
});

userSchema.pre('save', async function (next) {
  // This function can only be run when the password is modified
  if (!this.isModified('password')) return next();

  // This hashing the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // this delete the password confirm field
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  insertedPassword,
  userPassword
) {
  return await bcrypt.compare(insertedPassword, userPassword);
};
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    console.log(changedTimestamp, JWTTimestamp);
    return JWTTimestamp < changedTimestamp; // 100 < 200
  }
  return false;
};

module.exports = mongoose.model('User', userSchema);
