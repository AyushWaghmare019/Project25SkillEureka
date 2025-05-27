// routes/creator.js
const express = require('express');
import router from './routes';
const auth = require('../middleware/auth');
const role = require('../middleware/role');
// Example: Creator-specific route
router.get('/creator-dashboard', auth, role('creator'), (req, res) => {
  res.json({ message: 'Welcome to the creator dashboard' });
});
module.exports = router;
// routes/user.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const role = require('../middleware/role');

// Example: User-specific route
router.get('/user-dashboard', auth, role('user'), (req, res) => {
  res.json({ message: 'Welcome to the user dashboard' });
});
module.exports = router;
