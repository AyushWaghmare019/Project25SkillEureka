const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

router.get('/all', videoController.getAllVideos);
router.post('/upload', authMiddleware, videoController.uploadVideo);

module.exports = router;
