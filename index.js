// Dependencies
import express from 'express'
import bodyParser from 'body-parser'

// Module
import { app_port } from './config';
import router from './src/router';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use('/api', router);

app.listen(app_port, () => {
    console.log(`Server Running on [http://127.0.0.1:${app_port}]`)
});