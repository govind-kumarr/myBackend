import { Product } from "../models/Products.js";
import { validateQuery } from "../utils/removeQuotes.js";

export const getProducts = (req, res, next) => {
  Product.fetchAll()
    .then((products) => {
      // console.log(products);
      res.send(products);
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
};

export const getProductsWithQuery = (req, res, next) => {
  let query = req.query;
  if (Object.keys(query).length) {
    query = validateQuery(query);
    Product.findWithQuery(query)
      .then((products) => res.send(products))
      .catch((error) => {
        console.log("Error while getting products\n", error);
        res.send("Error while getting products");
      });
  } else next();
};

export const getSingleProduct = (req, res, next) => {
  const { id } = req.params;
  Product.getSingleProduct(id)
    .then((product) => {
      res.send(product);
    })
    .catch((error) => {
      res.send(error);
    });
};

export const updateSingleProduct = (req, res, next) => {
  const { id } = req.params;
  const data = req.body;
  Product.update(id, data)
    .then((updatedProd) => {
      res.send(updatedProd);
    })
    .catch((error) => {
      console.log(error);
      res.send("Error while updating product");
    });
};

export const deleteSingleProduct = (req, res, next) => {
  const { id } = req.params;
  Product.delete(id)
    .then((deletedProduct) => res.send(deletedProduct))
    .catch((error) => {
      console.log(error);
      res.send("Error while deleting product");
    });
};

export const deleteMultipleProds = (req, res, next) => {
  const deleteArr = req.body;
  Product.deleteMany(deleteArr.list)
    .then((deletedProducts) => res.send(deletedProducts))
    .catch((error) => {
      console.log(error);
      res.send("Error while deleting");
    });
};

export const postSingleProduct = (req, res, next) => {
  const data = req.body;
  if (!data.name || !data.price) res.send("Some of the fields are missing");

  const newProduct = new Product(data.name, data.price);
  newProduct
    .save()
    .then((product) => res.send(product))
    .catch((error) => {
      console.log(error);
      res.send("Error while saving");
    });
};
