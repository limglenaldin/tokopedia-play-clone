// Dependencies
const morgan = require('morgan')
const logger = require('./../../utils/logger/logger.js')

const stream = {
    write: (message) => logger.http(message),
}

const skip = () => {
    return process.env.NODE_ENV !== 'development'
}

const morganMiddleware = morgan(
    ":remote-addr :method :url :status :res[content-length] - :response-time ms",
    { stream }
)

module.exports = morganMiddleware