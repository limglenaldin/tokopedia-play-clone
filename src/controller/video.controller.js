// Dependencies
const StatusCodes = require('http-status-codes').StatusCodes

// Utils
const { errorResponse, successResponse } = require('./../../utils/responseFormatter.js')

class VideoController {
    constructor (videoSvc, videoValidation) {
        this.videoSvc = videoSvc;
        this.videoValidation = videoValidation;
    }

    index = async (req, res) => {
        const searchKeyword = req.query.search;
        const { errors, result } = await this.videoSvc.findAll(searchKeyword);

        if (errors.length < 1) {
            return res.status(StatusCodes.OK)
                .send(successResponse(
                    StatusCodes.OK,
                    'Successfully get videos data',
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
        const { error, value } = this.videoValidation.validate(body)

        if (error === undefined) {
            const { errors, result } = await this.videoSvc.store(value);

            if (errors.length < 1) {
                return res.status(StatusCodes.CREATED)
                    .send(successResponse(
                        StatusCodes.CREATED,
                        'successfully store video data',
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

        const { errors, result } = await this.videoSvc.findById(id);
        
        if (errors.length < 1) {
            return result
                ? res.status(StatusCodes.OK)
                    .send(successResponse(
                        StatusCodes.OK,
                        'Successfully get video data',
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

        const { error, value } = this.videoValidation.validate(body);

        if (error === undefined) {
            const { errors, result } = await this.videoSvc.updateById(id, value);
            
            if (errors.length < 1) {
                return result
                    ? res.status(StatusCodes.OK)
                        .send(successResponse(
                            StatusCodes.OK,
                            'Successfully update video data',
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

    patch = async (req, res) => {
        const id = req.params.id

        const { errors, result } = await this.videoSvc.patchTotalView(id);
        
        if (errors.length < 1) {
            return result
                ? res.status(StatusCodes.OK)
                    .send(successResponse(
                        StatusCodes.OK,
                        'Successfully update video data',
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

    destroy = async (req, res) => {
        const id = req.params.id

        const { errors, result } = await this.videoSvc.deleteById(id);
        
        if (errors.length < 1) {
            return result
                ? res.status(StatusCodes.OK)
                    .send(successResponse(
                        StatusCodes.OK,
                        'Successfully delete video data',
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
                    'internal server error',
                    ''
                ));
    }
}

module.exports = VideoController