const { getProducts, getProduct, createProduct, updatedProduct,
    deleteProduct } = require('./../controllers/product.controller')

const routes = [
    {
        url: '/products',
        method: 'GET',
        handler: getProducts
    },
    {
        url: '/products/:productId',
        method: 'GET',
        handler: getProduct
    },
    {
        url: '/products',
        method: 'POST',
        handler: createProduct
    },
    {
        url: '/products/:productId',
        method: 'PUT',
        handler: updatedProduct
    },
    {
        url: '/products/:productId',
        method: 'DELETE',
        handler: deleteProduct
    }
];

module.exports = routes;