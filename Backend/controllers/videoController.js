exports.uploadVideo = async (req, res) => {
  try {
    if (req.user.role !== 'creator') {
      return res.status(403).json({ message: 'Only creators can upload' });
    }

    const { title, url, course } = req.body;

    const video = new Video({
      title,
      url,
      course,
      creator: req.user._id
    });

    await video.save();

    res.status(201).json({ message: 'Video uploaded successfully', video });
  } catch (err) {
    res.status(500).json({ message: 'Error uploading video' });
  }
};
