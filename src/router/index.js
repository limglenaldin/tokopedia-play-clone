// Dependencies
import express from 'express'
import swaggerUi from "swagger-ui-express";

// Routes
import routerV1 from './v1';

// Misc
import swaggerDoc from './../../doc/swagger/openapi.json' assert {type: 'json'};

const router = express.Router();

router.use('/v1', routerV1)
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

export default router