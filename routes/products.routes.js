import { Router } from "express";
import {
  deleteMultipleProds,
  deleteSingleProduct,
  getProducts,
  getProductsWithQuery,
  getSingleProduct,
  postSingleProduct,
  updateSingleProduct,
} from "../controllers/products.controller.js";

const ProductRouter = Router();

ProductRouter.get("/", getProductsWithQuery);

ProductRouter.get("/", getProducts);

ProductRouter.get("/:id", getSingleProduct);

ProductRouter.patch("/:id", updateSingleProduct);

ProductRouter.delete("/deleteMany", deleteMultipleProds);

ProductRouter.delete("/:id", deleteSingleProduct);

ProductRouter.post("/", postSingleProduct);

export { ProductRouter };
