// Dependencies
import express from 'express'

// Routes
// .....

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello world");
})

export default router