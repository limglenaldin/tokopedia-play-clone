// Model
import { Comment } from "../model/comment.model";

class CommentServices {
    findAll = async (videoId) => {
        try {
            const comments = await Comment.find({ videoId: videoId }).exec();

            return { errors: [], result: comments};
        } catch (error) {
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
            console.log(error)
            return { errors: error, result: null};
        }
    }
}

export default CommentServices