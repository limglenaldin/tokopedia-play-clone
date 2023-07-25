const successResponse = (code, message, data = []) => {
    return {
        code: code,
        message: message,
        data: data
    }
}

const errorResponse = (code, message, error) => {
    return {
        code: code,
        message: message,
        error: error
    }
}

export {successResponse, errorResponse}