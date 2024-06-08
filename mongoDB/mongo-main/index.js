import express from 'express';
import dotenv from 'dotenv';
import db from './config/db.js';
import productRoutes from './routes/product.routes.js';

dotenv.config();

const app = express();
const baseURL = "/api/v1";

db();
app.use(express.json());

app.use(`${baseURL}/products`, productRoutes);
app.use("/", (request, response) => response.send({ app: "ecommerce_app"}));

app.listen(process.env.PORT, () => 
  console.log(`Server is listening on port ${process.env.PORT}`)
);    