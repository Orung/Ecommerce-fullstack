const db = require('../models')

const productModels = db.products

async function getAllProducts(req, res){
    try {
        const products = await productModels.findAll()
        res.status(200).json(products)
    }catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}
async function addProducts(req, res){
    const postProduct  = req.body
    try {
        const product = await productModels.create(postProduct)
        res.status(200).json({
            message:'Product send successfully',
            data:product
        })
    }catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}
async function updateProduct(req, res){
    const postProduct  = req.params.id
    const updatePost = req.body
    try {
        const product = await productModels.update(updatePost, {
            where: {
                id: postProduct
            }
        })
        res.status(200).json({
            message:'Product updated successfully',
            data:product
        })
    }catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}
module.exports = {
    getAllProducts, addProducts, updateProduct
}