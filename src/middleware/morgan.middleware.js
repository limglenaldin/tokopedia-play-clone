import morgan from "morgan";
import logger from "../../utils/logger/logger";

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

export default morganMiddleware