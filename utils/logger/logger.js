const winston = require('winston')

const format = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms'}),
    // winston.format.colorize({ all: true }),
    winston.format.json()
    // winston.format.printf(
    //     (info) => `${info.timestamp} ${info.level}: ${info.message}`
    // )
)

const transports = [
    new winston.transports.Console(),
    new winston.transports.File({
        filename: 'logs/logger.log'
    })
]

const logger = winston.createLogger({
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
    format,
    transports
})

module.exports = logger