// Built-in
const createServer = require('http').createServer

// Dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const rateLimit = require('express-rate-limit').rateLimit

// Configuration
const configuration = require('./config/index.js')
const connectDatabase = require('./src/database/database.js')

// Router
const router = require('./src/router/index.js')

// Utils
const logger = require('./utils/logger/logger.js')
const morganMiddleware = require('./src/middleware/morgan.middleware.js')
const {socketIo, initSocketIo} = require('./utils/socket.js')

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