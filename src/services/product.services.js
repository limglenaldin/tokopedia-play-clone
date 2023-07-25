// Model
import { Product } from "../model/product.model";

class ProductServices {
    findAll = async () => {
        try {
            const products = await Product.find();

            return { errors: [], result: products};
        } catch (error) {
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
            console.log(error)
            return { errors: error, result: null};
        }
    }

    findById = async (id) => {
        try {
            const products = await Product.findById(id);

            return { errors: [], result: products};
        } catch (error) {
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
            console.log(error)
            return { errors: error, result: null};
        }
    }

    deleteById = async (id) => {
        try {
            const result = await Product.findByIdAndDelete(id)

            return { errors: [], result: result};
        } catch (error) {
            return { errors: error, result: null};
        }
    }
}

export default ProductServices