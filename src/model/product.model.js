// Dependencies
import mongoose from "mongoose"
import Joi from "joi"

const productValidation = Joi.object({
    video_id: Joi.string()
        .required(),
    title: Joi.string()
        .required(),
    link: Joi.string()
        .required(),
    image_url: Joi.string()
        .required(),
    price: Joi.number()
        .required()
});

const mongoSchema = new mongoose.Schema({
    videoId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
}, { timestamps: true })

const Product = mongoose.model('Product', mongoSchema)

export { Product, productValidation } 