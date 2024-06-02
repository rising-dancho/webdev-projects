import express from "express";
import dotenv from "dotenv";
import blobRouter from "./routes/blob.routes.js";

dotenv.config();
const app = express();
const baseURL = "/api/v1";

app.use(express.json());

app.use(`${baseURL}/blobs`, blobRouter);
app.use("/", (request, response) => response.send({ app: "multer" }));

app.listen(process.env.PORT, () =>
  console.log(`Server is listening on port ${process.env.PORT}`)
);

