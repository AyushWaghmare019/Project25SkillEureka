exports.aboutPage = (req, res) => {
    res.json({ title: 'About', content: 'Welcome to the platform!' });
  };
  
  exports.creatorPage = (req, res) => {
    res.json({ title: 'Creator Page', message: 'Join as a creator!' });
  };
  
  exports.homepage = (req, res) => {
    res.json({ message: 'This is the homepage endpoint.' });
  };
  
  exports.updates = (req, res) => {
    res.json({ updates: ['Feature A released', 'Bug fix B'] });
  };
  
  exports.myLibrary = async (req, res) => {
    const userId = req.user._id;
    try {
      const videos = await Video.find({ viewerIds: userId });
      res.json(videos);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch library' });
    }
  };
  