import Blog from '../models/blog.model.js';

const createBlog = async (req, res) => {
  const { userId, title, content } = req.body;

  // Check if required fields are present
  if (!userId || !title || !content) {
    return res.status(400).send({
      message: 'userId, title, and content are required fields.',
    });
  }

  let image = null;
  if (req.file) {
    const { path, filename } = req.file;
    image = { path, filename };
  }

  const newBlog = new Blog({
    userId,
    title,
    content,
    image,
  });

  try {
    await newBlog.save();
    res.status(201).send({
      message: 'New blog created.',
      data: newBlog,
    });
  } catch (error) {
    res.status(500).send({
      message: 'Error creating blog.',
      error: error.message,
    });
  }
};

export { createBlog };