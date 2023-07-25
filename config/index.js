// Dependencies
import 'dotenv/config'

const configuration = {
    app_port: process.env.APP_PORT,
    database_url: process.env.DATABASE_URL,
    database_name: process.env.DATABASE_NAME
}

export default configuration