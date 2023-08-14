// Dependencies
import mongoose from "mongoose"
import Joi from "joi"
import { socketIo } from "../../utils/socket";

const commentValidation = Joi.object({
    username: Joi.string()
        .required(),
    comment: Joi.string()
        .required()
});

const mongoSchema = new mongoose.Schema({
    videoId: {
        type: String
    },
    username: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    }
}, { timestamps: true })

const Comment = mongoose.model('Comment', mongoSchema)

Comment.watch().on('change', () => {
    socketIo.emit('newComment')
});

export { Comment, commentValidation } 