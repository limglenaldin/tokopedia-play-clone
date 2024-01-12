// Dependencies
const StatusCodes = require('http-status-codes').StatusCodes

// Utils
const { errorResponse, successResponse } = require('./../../utils/responseFormatter.js')

class ProductController {
    constructor (productSvc, productValidation) {
        this.productSvc = productSvc,
        this.productValidation = productValidation
    }

    index = async (req, res) => {
        const { errors, result } = await this.productSvc.findAll()

        if (errors.length < 1) {
            return res.status(StatusCodes.OK)
                .send(successResponse(
                    StatusCodes.OK,
                    'Successfully get products data',
                    result,
                ));
        }

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                .send(errorResponse(
                    StatusCodes.INTERNAL_SERVER_ERROR,
                    'Internal server error',
                    ''
                ));
    }

    store = async (req, res) => {
        const body = req.body;
        const { error, value } = this.productValidation.validate(body)

        if (error === undefined) {
            const { errors, result } = await this.productSvc.store(value);

            if (errors.length < 1) {
                return res.status(StatusCodes.CREATED)
                    .send(successResponse(
                        StatusCodes.CREATED,
                        'successfully store product data',
                        result,
                    ));
            }
        } else {
            return res.status(StatusCodes.BAD_REQUEST)
                .send(errorResponse(
                        StatusCodes.BAD_REQUEST,
                        'bad request',
                        error.details[0].message,
                    ));
        }

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                .send(errorResponse(
                    StatusCodes.INTERNAL_SERVER_ERROR,
                    'Internal server error',
                    ''
                ));
    }

    show = async (req, res) => {
        const id = req.params.id
        
        const { errors, result } = await this.productSvc.findById(id)

        if (errors.length < 1) {
            return result
                ? res.status(StatusCodes.OK)
                    .send(successResponse(
                        StatusCodes.OK,
                        'Successfully get product data',
                        result,
                    ))
                : res.status(StatusCodes.NOT_FOUND)
                    .send(successResponse(
                        StatusCodes.NOT_FOUND,
                        'Id doesn\'t match with our record',
                        {},
                    ))
        }
        
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                .send(errorResponse(
                    StatusCodes.INTERNAL_SERVER_ERROR,
                    'Internal server error',
                    ''
                ));
    }

    update = async (req, res) => {
        const id = req.params.id
        const body = req.body;

        const { error, value } = this.productValidation.validate(body);

        if (error === undefined) {
            const { errors, result } = await this.productSvc.updateById(id, value);
            
            if (errors.length < 1) {
                return result
                    ? res.status(StatusCodes.OK)
                        .send(successResponse(
                            StatusCodes.OK,
                            'Successfully update product data',
                            result,
                        ))
                    : res.status(StatusCodes.NOT_FOUND)
                        .send(successResponse(
                            StatusCodes.NOT_FOUND,
                            'Id doesn\'t match with our record',
                            {},
                        ))
            }

        } else {
            return res.status(StatusCodes.BAD_REQUEST)
                .send(errorResponse(
                        StatusCodes.BAD_REQUEST,
                        'bad request',
                        error.details[0].message,
                    ));
        }

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                .send(errorResponse(
                    StatusCodes.INTERNAL_SERVER_ERROR,
                    'Internal server error',
                    ''
                ));
    }

    destroy = async (req, res) => {
        const id = req.params.id

        const { errors, result } = await this.productSvc.deleteById(id);

        if (errors.length < 1) {
            return result
                ? res.status(StatusCodes.OK)
                    .send(successResponse(
                        StatusCodes.OK,
                        'Successfully delete product data',
                        result._id,
                    ))
                : res.status(StatusCodes.NOT_FOUND)
                    .send(successResponse(
                        StatusCodes.NOT_FOUND,
                        'Id doesn\'t match with our record',
                        {},
                    ))
        }

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                .send(errorResponse(
                    StatusCodes.INTERNAL_SERVER_ERROR,
                    'Internal server error',
                    ''
                ));
    }

    indexByVideoId = async (req, res) => {
        const videoId = req.params.id
        const { errors, result } = await this.productSvc.findByVideoId(videoId)

        if (errors.length < 1) {
            return res.status(StatusCodes.OK)
                .send(successResponse(
                    StatusCodes.OK,
                    'Successfully get products data',
                    result,
                ));
        }

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                .send(errorResponse(
                    StatusCodes.INTERNAL_SERVER_ERROR,
                    'Internal server error',
                    ''
                ));
    }
}

module.exports = ProductController