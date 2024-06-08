import Product from '../models/product.model.js';

const addProduct = async (request, response) => {
  try{
    const { title, price, description, category, image, rating } = request.body;

    const newProduct = new Product({
      title,
      price,
      description,
      category,
      image,
      rating,
    });
    await newProduct.save();

    response.status(201).send({
      message: "New product added.",
      data: newProduct
    });
  } catch (error){
    console.error(error.message);
    response.status(response.statusCode).send({
      message: error.message
    });
  }
};

const getAllProducts = async (request, response) => {
  try {
    const products = await Product.find();

    response.status(200).send({
      message: "List of Products.",
      data: products,
    });
  } catch {
    console.error(error.message);
    response.status(response.statusCode).send({
      message: error.message
    });
  }
};

const getProductById = async (request, response) => {
  try {
    const { productId } = request.params;
    const productById = await Product.findOne({ _id: productId});

    if (!productById){
      response.status(404).send({
        message: "Product does not exist."
      })
    } else {
      response.status(200).send({
        message: `Product with Id ${productId}`,
        data: productById,
      });
    }
  } catch (error) {
    console.error(error.message);
    response.status(response.statusCode).send({
      message: error.message
    });
  }
};

const updateProductById = async (request, response) => {
  try {
    const { productId } = request.params;
    const updateData = request.body;

    const { matchedCount } = await Product.updateOne({
      _id: productId }, {$set:updateData});

     if(!matchedCount){
      response.status(404).send({
        message: "Product does not exist."
      });
     } else {
      const updatedProduct = await Product.findOne({ _id: productId});

      response.status(200).send({
        message: "Product has been updated.",
        data:  updatedProduct
      })
     }

  } catch (error) {
    console.error(error.message);
    response.status(response.statusCode).send({
      message: error.message
    })
  }
}

const deleteProductById = async (request, response) => {
  try {
    const { productId } = request.params;

    const { deletedCount } = await Product.deleteOne({
      _id: productId });

    if (!deletedCount) {
      response.status(404).send({
        message: "Product does not exist."
      })
    } else {
      response.status(204).send();
    }

  } catch (error) {
    console.error(error.message);
    response.status(response.statusCode).send({
      message: error.message
    });
  }
}

export { addProduct, getAllProducts, getProductById, updateProductById, deleteProductById };