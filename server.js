// Dependencies
import express from 'express'
import bodyParser from 'body-parser'

// Configuration
import { app_port } from './config';
import connectDatabase from './src/database/database';

// Router
import router from './src/router';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

connectDatabase()

app.use('/api', router);

app.listen(app_port, () => {
    console.log(`Server Running on [http://127.0.0.1:${app_port}]`)
});