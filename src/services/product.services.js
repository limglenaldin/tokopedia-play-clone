// Model
import { Product } from "../model/product.model";

// Utils
import logger from '../../utils/logger/logger';

class ProductServices {
    findAll = async () => {
        try {
            const products = await Product.find();

            return { errors: [], result: products};
        } catch (error) {
            logger.error(`ProductServices.findAll: ${error}`)
            return { errors: error, result: null};
        }
    }

    store = async (data) => {
        try {
            const result = await Product.create({
                videoId: data.video_id,
                title: data.title,
                link: data.link,
                imageUrl: data.image_url,
                price: data.price
              })

            return { errors: [], result: result};
        } catch (error) {
            logger.error(`ProductServices.store: ${error}`, { payload: data })
            return { errors: error, result: null};
        }
    }

    findById = async (id) => {
        try {
            const products = await Product.findById(id);

            return { errors: [], result: products};
        } catch (error) {
            logger.error(`ProductServices.findById: ${error}`, { id: id })
            return { errors: error, result: null};
        }
    }

    updateById = async (id, data) => {
        try {
            const result = await Product.findByIdAndUpdate(id, {
                videoId: data.videoId,
                title: data.title,
                link: data.link,
                imageUrl: data.image_url,
                price: data.price
              })

            return { errors: [], result: result?._id};
        } catch (error) {
            logger.error(`ProductServices.updateById: ${error}`, { id: id, payload: data })
            return { errors: error, result: null};
        }
    }

    deleteById = async (id) => {
        try {
            const result = await Product.findByIdAndDelete(id)

            return { errors: [], result: result};
        } catch (error) {
            logger.error(`ProductServices.deleteById: ${error}`, { id: id })
            return { errors: error, result: null};
        }
    }

    findByVideoId = async (videoId) => {
        try {
            const products = await Product.find({ videoId: videoId });

            return { errors: [], result: products};
        } catch (error) {
            logger.error(`ProductServices.findByVideoId: ${error}`, { videoId: id })
            return { errors: error, result: null};
        }
    }
}

export default ProductServices