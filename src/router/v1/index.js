// Dependencies
const express = require('express')

// Routes
const videoRouter = require('./video.router.js')
const { productRouter } = require('./product.router.js')

const routerV1 = express.Router();

routerV1.get('/', (req, res) => {
    res.send("Hello world");
})

routerV1.use('/videos', videoRouter)
routerV1.use('/products', productRouter)

module.exports = routerV1