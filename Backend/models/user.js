const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ['user', 'creator'], required: true },
  avatar: String, // image URL
  socialLinks: {
    instagram: String,
    youtube: String,
    linkedin: String
  },
  followers: { type: Number, default: 0 }
});

module.exports = mongoose.model('User', userSchema);
