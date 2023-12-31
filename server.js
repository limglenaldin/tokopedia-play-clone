// Built-in
import { createServer } from "http"

// Dependencies
import express from 'express'
import bodyParser from 'body-parser'
import cors from "cors";
import rateLimit from "express-rate-limit"

// Configuration
import configuration from './config';
import connectDatabase from './src/database/database';

// Router
import router from './src/router';

// Utils
import logger from './utils/logger/logger';
import morganMiddleware from './src/middleware/morgan.middleware';
import initSocketIo, { socketIo } from "./utils/socket";

// Config
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 100,
})

const app = express();

// app.use(limiter)
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(morganMiddleware);

connectDatabase(configuration.database_url, configuration.database_name)

app.use('/api', router);

const httpServer = createServer(app);
initSocketIo(httpServer)

httpServer.listen(configuration.app_port, () => {
    logger.info(`Server Running on [http://127.0.0.1:${configuration.app_port}]`)
});

socketIo.on('connection', (socket) => {
    logger.info(`New socket connetion on ${socket.id}`);

    socketIo.on('disconnect', (socket) => {
        logger.info(`${socket.id} has been disconnected`);
    })
})
