import { Schema, model } from 'mongoose';

// schema
const blogSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true],
    },
    content: {
      type: String,
      required: [true],
    },
    image: {
      path: {
        type: String,
        required: [true],
      },
      filename: {
        type: String,
        required: [true],
      },
    },
  },
  {
    timestamps: true,
  }
);

// model
const Blog = model('User', blogSchema);

export default Blog;
