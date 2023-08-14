// Dependencies
import 'dotenv/config'

const configuration = {
    app_port: process.env.APP_PORT ? process.env.APP_PORT : 5000,
    database_url: process.env.DATABASE_URL ? process.env.DATABASE_URL : 'tokoplay',
    database_name: process.env.DATABASE_NAME ? process.env.DATABASE_NAME : 'mongodb://0.0.0.0:27017/'
}

export default configuration