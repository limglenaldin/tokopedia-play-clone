// Dependencies
const mongoose = require('mongoose')
const Joi = require('joi')
const { socketIo } = require('./../../utils/socket.js')

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

module.exports = {
    Comment,
    commentValidation
} 