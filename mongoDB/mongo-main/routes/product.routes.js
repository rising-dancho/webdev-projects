import { Router } from "express";
import { addProduct, getAllProducts, getProductById, updateProductById, deleteProductById } from "../controllers/product.controllers.js";

const productRouter = Router();

productRouter.post("/", addProduct);
productRouter.get("/", getAllProducts);
productRouter.get("/:productId", getProductById);
productRouter.put("/:productId", updateProductById);
productRouter.delete("/:productId", deleteProductById);

export default productRouter;