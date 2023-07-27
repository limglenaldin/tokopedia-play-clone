// Model
import { Comment } from "../model/comment.model";

// Utils
import logger from '../../utils/logger/logger';

class CommentServices {
    findAll = async (videoId) => {
        try {
            const comments = await Comment.find({ videoId: videoId }).exec();

            return { errors: [], result: comments};
        } catch (error) {
            logger.error(`CommentServices.findAll: ${error}`, { videoId: videoId })
            return { errors: error, result: null};
        }
    }

    store = async (videoId, data) => {
        try {
            const result = await Comment.create({
                videoId: videoId,
                username: data.username,
                comment: data.comment,
              })

            return { errors: [], result: result};
        } catch (error) {
            logger.error(`CommentServices.store: ${error}`, { videoId: videoId, payload: data })
            return { errors: error, result: null};
        }
    }
}

export default CommentServices