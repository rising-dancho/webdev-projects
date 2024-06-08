import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title field is required."]
    },
    price: {
      type: Number,
      required: [true, "Price field is required."]
    },
    description: {
      type: String,
      required:[true, "Description field is required."]
    },
    category: {
      type: String,
      required:[true, "Category field is required."]
    },
    image: {
      type: String,
      required: [true, "Image is required."]
    },
    rating: {
      rate: {
        type: Number,
      },
      count: {
        type: Number,
      }
    }
  }
);

const Product = model("Product", productSchema);
export default Product;