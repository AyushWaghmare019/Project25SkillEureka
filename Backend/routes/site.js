const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');

// Sidebar section endpoints
router.get('/about', siteController.aboutPage);
router.get('/creator', siteController.creatorPage);
router.get('/homepage', siteController.homepage);
router.get('/updates', siteController.updates);
router.get('/mylibrary', siteController.myLibrary);

module.exports = router;
