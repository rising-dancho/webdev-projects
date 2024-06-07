import Blog from '../models/blog.model';

async function createBlog(req, res) {
  try {
    const { userId, content } = req.body;
    const { path, filename } = req.file;

    // document
    const newBlog = new Blog({
      userId,
      content,
      image: { path, filename },
    });
    await newUser.save();
  } catch (error) {
    res.status(res.statusCode).send({ message: error.message });
  }
}

export { createBlog };
