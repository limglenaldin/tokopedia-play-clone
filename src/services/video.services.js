// Model
import { Video } from '../model/video.model';

class VideoServices {
    findAll = async () => {
        try {
            const videos = await Video.find();

            return { errors: [], result: videos};
        } catch (error) {
            return { errors: error, result: null};
        }
    }

    store = async (data) => {
        try {
            const result = await Video.create({
                title: data.title,
                store: data.store,
                thumbnailUrl: data.thumbnail_url,
                videoUrl: data.video_url,
                totalView: 0
            });

            return { errors: [], result: result};
        } catch (error) {
            return { errors: error, result: null};
        }
    } 

    findById = async (id) => {
        try {
            const result = await Video.findById(id)

            return { errors: [], result: result};
        } catch (error) {
            return { errors: error, result: null};
        }
    }

    updateById = async (id, data) => {
        try {
            const result = await Video.findByIdAndUpdate(id, {
                title: data.title,
                store: data.store,
                thumbnailUrl: data.thumbnail_url,
                videoUrl: data.video_url,
            })

            return { errors: [], result: result._id};
        } catch (error) {
            return { errors: error, result: null};
        }
    }

    deleteById = async (id) => {
        try {
            const result = await Video.findByIdAndDelete(id)

            return { errors: [], result: result};
        } catch (error) {
            return { errors: error, result: null};
        }
    }
}

export default VideoServices