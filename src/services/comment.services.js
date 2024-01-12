// Model
const { Comment } = require('./../model/comment.model.js')

// Utils
const logger = require('./../../utils/logger/logger.js')

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

module.exports = CommentServices