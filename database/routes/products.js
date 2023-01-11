const express = require('express')
const productController = require('../controllers/productControl')


const productRouter = express.Router()


productRouter.get('/', productController.getAllProducts)
productRouter.post('/', productController.addProducts)
productRouter.put('/:id', productController.updateProduct)


module.exports = productRouter