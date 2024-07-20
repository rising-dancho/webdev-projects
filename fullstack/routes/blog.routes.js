import { Router } from 'express';
import multer from 'multer';
import { storage } from '../config/storage.js';
import { createBlog } from '../controllers/blog.controllers.js';

const blogRouter = Router();
const blogImage = multer({ storage });

blogRouter.post('/', blogImage.single('blog-image'), createBlog);

export default blogRouter;
