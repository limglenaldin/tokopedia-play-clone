// Dependencies
import express from 'express'

// Routes
import videoRouter from './video.router';

const routerV1 = express.Router();

routerV1.get('/', (req, res) => {
    res.send("Hello world");
})

routerV1.use('/videos', videoRouter)

export default routerV1