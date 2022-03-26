const Product = require("../models/product.model");

const getProducts = async (req, reply) => {
    try {
        const products = await Product.find();
        return reply.code(200).send(products);
    } catch (e) {
        return reply.code(400).send(e);
    }
}

const getProduct = async (req, reply) => {
    try {
        const { productId } = req.params;
        const product = await Product.findById(productId);
        return reply.code(200).send(product);
    } catch (e) {
        return reply.code(400).send(e);
    }
}

const createProduct = async (req, reply) => {
    try {
        const infoProduct = req.body;
        const product = new Product(infoProduct);
        const productAdded = await product.save();
        return reply.code(201).send(productAdded);
    } catch (e) {
        return reply.code(400).send(e);
    }
}

const updatedProduct = async (req, reply) => {
    try {
        const { productId } = req.params;
        const infoProduct = req.body;

        const productUpdated = await Product.findByIdAndUpdate(productId, infoProduct, { new: true });

        if (productUpdated) {
            return reply.code(200).send(productUpdated);
        }

        return reply.code(400).send({ message: "Product not found" });
    } catch (e) {
        return reply.code(400).send(e);
    }
}

const deleteProduct = async (req, reply) => {
    try {
        const { productId } = req.params;
        const productDeleted = await Product.findByIdAndDelete(productId);
        if (productDeleted) {
            return reply.code(200).send(productDeleted);
        }

        return reply.code(400).send({ message: "Product not found" });
    } catch (e) {
        return reply.code(400).send(e);
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updatedProduct,
    deleteProduct
}