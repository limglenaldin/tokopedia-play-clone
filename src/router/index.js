// Dependencies
const express = require('express')
const swaggerUi = require('swagger-ui-express')

// Routes
const routerV1 = require('./v1/index.js')

// Misc
const swaggerDoc = require('./../../doc/swagger/openapi.json')

const router = express.Router();

router.use('/v1', routerV1)
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

module.exports = router