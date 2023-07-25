// Dependencies
import mongoose from "mongoose"
import Joi from "joi"

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

export { Comment, commentValidation } 