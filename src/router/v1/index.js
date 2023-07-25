// Dependencies
import express from 'express'

// Routes
import videoRouter from './video.router';
import productRouter from './product.router';

const routerV1 = express.Router();

routerV1.get('/', (req, res) => {
    res.send("Hello world");
})

routerV1.use('/videos', videoRouter)
routerV1.use('/products', productRouter)

export default routerV1