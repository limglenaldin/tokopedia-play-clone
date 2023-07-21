// Dependencies
import 'dotenv/config'

const app_port = process.env.APP_PORT;
const mongoConnectionString = process.env.DATABASE_URL;

export { app_port, mongoConnectionString }