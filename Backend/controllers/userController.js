const User = require('../models/User');
const Video = require('../models/Video');

exports.getCreatorProfile = async (req, res) => {
  try {
    const creatorId = req.params.id;

    const creator = await User.findById(creatorId).select('-password');
    if (!creator || creator.role !== 'creator') {
      return res.status(404).json({ message: 'Creator not found' });
    }

    const videos = await Video.find({ creator: creatorId });

    res.json({
      creator: {
        id: creator._id,
        name: creator.name,
        avatar: creator.avatar,
        socialLinks: creator.socialLinks,
        followers: creator.followers
      },
      videos
    });
  } catch (err) {
    res.status(500).json({ message: 'Error loading creator profile' });
  }
};
