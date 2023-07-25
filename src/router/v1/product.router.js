// Dependencies
import express from "express";

// N-Layer
import ProductServices from "../../services/product.services";
import ProductController from "../../controller/product.controller";
import { productValidation } from "../../model/product.model";

const productSvc = new ProductServices();
const productController = new ProductController(productSvc, productValidation)

const productRouter = express.Router();

productRouter.get('/', productController.index)
productRouter.post('/', productController.store)
productRouter.get('/:id', productController.show)
productRouter.put('/:id', productController.update)
productRouter.delete('/:id', productController.destroy)

export default productRouter