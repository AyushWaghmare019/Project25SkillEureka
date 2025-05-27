const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
router.get('/creator/:id', userController.getCreatorProfile);
router.get('/top-creators', userController.getTopCreators);
module.exports = router;
router.get('/creator/dashboard', authMiddleware, userController.creatorDashboard);
router.post('/creator/:id/follow', authMiddleware, userController.followCreator);

exports.creatorDashboard = async (req, res) => {
    try {
      if (req.user.role !== 'creator') {
        return res.status(403).json({ message: 'Only creators can access dashboard' });
      }
  
      const videos = await Video.find({ creator: req.user._id });
  
      const creator = await User.findById(req.user._id);
  
      res.json({
        name: creator.name,
        followers: creator.followers,
        totalVideos: videos.length,
        videos
      });
    } catch (err) {
      res.status(500).json({ message: 'Error loading dashboard' });
    }
  };
  exports.followCreator = async (req, res) => {
    try {
      const creatorId = req.params.id;
  
      const creator = await User.findById(creatorId);
      if (!creator || creator.role !== 'creator') {
        return res.status(404).json({ message: 'Creator not found' });
      }
  
      // Optional: check if user already followed (create a Follow model if needed)
      creator.followers += 1;
      await creator.save();
  
      res.json({ message: `You are now following ${creator.name}` });
    } catch (err) {
      res.status(500).json({ message: 'Error following creator' });
    }
  };
    