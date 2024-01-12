// Dependencies
const mongoose = require('mongoose')
const logger = require('./../../utils/logger/logger.js')

const connectDatabase = (connectionString, databaseName) =>  {
    mongoose.connect(connectionString+databaseName)
        .then(() => logger.info(`Success open connection to ${databaseName} Database`))
        .catch((err) => logger.error(`Oops, failed to open connection to ${databaseName} Database`, { reason: err }))
}

module.exports = connectDatabase