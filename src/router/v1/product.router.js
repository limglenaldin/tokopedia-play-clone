// Dependencies
const express = require('express')

// N-Layer
const ProductServices = require('./../../services/product.services.js')
const ProductController = require('./../../controller/product.controller.js')
const { productValidation } = require('./../../model/product.model.js')

const productSvc = new ProductServices();
const productController = new ProductController(productSvc, productValidation)

const productRouter = express.Router();

productRouter.get('/', productController.index)
productRouter.post('/', productController.store)
productRouter.get('/:id', productController.show)
productRouter.put('/:id', productController.update)
productRouter.delete('/:id', productController.destroy)

const productVideoRouter = express.Router({
    mergeParams: true 
})

productVideoRouter.get('/', productController.indexByVideoId)

module.exports = {
    productRouter,
    productVideoRouter
}