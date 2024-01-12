// Dependencies
const mongoose = require('mongoose')
const Joi = require('joi')

const videoValidation = Joi.object({
    title: Joi.string()
        .required(),
    store: Joi.string()
        .required(),
    thumbnail_url: Joi.string()
        .required(),
    store: Joi.string()
        .required(),
    video_url: Joi.string()
        .required(),
    totalView: Joi.number()
});

const mongoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    store: {
        type: String,
        required: true,
    },
    thumbnailUrl: {
        type: String,
        required: true,
    },
    videoUrl: {
        type: String,
        required: true,
    },
    totalView: {
        type: Number
    },
}, { timestamps: true })

const Video = mongoose.model('Video', mongoSchema)

module.exports = {
    Video,
    videoValidation
} 