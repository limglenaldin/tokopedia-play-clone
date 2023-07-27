import 'dotenv/config'
import mongoose from 'mongoose'
import logger from '../../utils/logger/logger'

const connectDatabase = (connectionString, databaseName) =>  {

    mongoose.connect(connectionString+databaseName)
        .then(() => logger.info(`Success open connection to ${databaseName} Database`))
        .catch((err) => logger.error(`Oops, failed to open connection to ${databaseName} Database`, { reason: err }))
}

export default connectDatabase