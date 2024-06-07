import Blog from '../models/blog.model.js';

const createBlog = async (req, res) => {
  const { userId, title, content } = req.body;
  const { path, filename } = req.file;

  const newBlog = new Blog({
    userId,
    title,
    content,
    image: { path, filename },
  });
  await newBlog.save();

  res.status(201).send({
    message: 'New blog created.',
    data: newBlog,
  });
};

export { createBlog };
