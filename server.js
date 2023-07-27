// Dependencies
import express from 'express'
import bodyParser from 'body-parser'

// Configuration
import configuration from './config';
import connectDatabase from './src/database/database';

// Router
import router from './src/router';

// Utils
import logger from './utils/logger/logger';
import morganMiddleware from './src/middleware/morgan.middleware';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(morganMiddleware);

connectDatabase(configuration.database_url, configuration.database_name)

app.use('/api', router);

app.listen(configuration.app_port, () => {
    logger.info(`Server Running on [http://127.0.0.1:${configuration.app_port}]`)
});