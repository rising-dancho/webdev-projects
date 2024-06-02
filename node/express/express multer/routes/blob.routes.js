import { Router } from 'express';
import multer from 'multer';
import { addBlob } from '../controllers/blob.controllers.js';
import storage from '../config/storage.js';

const blobRouter = Router();
const blogImage = multer({ storage });

blobRouter.post('/', blogImage.single('blob-image'), addBlob);

export default blobRouter;
