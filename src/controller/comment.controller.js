// Dependencies
import {
	StatusCodes,
} from 'http-status-codes';

// Utils
import { errorResponse, successResponse } from '../../utils/responseFormatter';

class CommentController {
    constructor (commentSvc, commentValidation) {
        this.commentSvc = commentSvc,
        this.commentValidation = commentValidation
    }

    index = async (req, res) => {
        const videoId = req.params.id

        const { errors, result } = await this.commentSvc.findAll(videoId)

        if (errors.length < 1) {
            return res.status(StatusCodes.OK)
                .send(successResponse(
                    StatusCodes.OK,
                    `Successfully get comment for video id ${videoId}`,
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
        const videoId = req.params.id
        const body = req.body;

        const { error, value } = this.commentValidation.validate(body)

        if (error === undefined) {
            const { errors, result } = await this.commentSvc.store(videoId, value);

            if (errors.length < 1) {
                return res.status(StatusCodes.CREATED)
                    .send(successResponse(
                        StatusCodes.CREATED,
                        `Successfully store comment for video id ${videoId}`,
                        result,
                    ));
            }
        } else {
            return res.status(StatusCodes.BAD_REQUEST)
                .send(errorResponse(
                        StatusCodes.BAD_REQUEST,
                        'Bad request',
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
}

export default CommentController