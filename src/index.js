const fastify = require('fastify')({
    logger: true
});

const swagger = require('./utils/swagger')

require('dotenv').config();

require('./utils/mongoose');

const productRoute = require('./routes/products.routes');

fastify.register(require('fastify-swagger'), swagger.options);

fastify.get('/', async(request, reply) => {
    reply.send({ hello: 'world'})
});

productRoute.forEach(route => {
    fastify.route(route);
})

const start = async() => {
    try {
        await fastify.listen(3000);
        fastify.log.info(`server listening on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}

start();