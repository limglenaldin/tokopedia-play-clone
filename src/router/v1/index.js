// Dependencies
import express from 'express'

// Routes
// ,,,,,

const routerV1 = express.Router();

routerV1.get('/', (req, res) => {
    res.send("Hello world");
})

export default routerV1