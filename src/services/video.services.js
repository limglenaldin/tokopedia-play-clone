// Model
import { Video } from '../model/video.model';

// Utils
import logger from '../../utils/logger/logger';

class VideoServices {
    findAll = async (keyword) => {
        try {
            const search = keyword
                ? { title: {
                        $regex: new RegExp(keyword, 'i')
                    }
                } : {};

            const videos = await Video.find(search)

            return { errors: [], result: videos};
        } catch (error) {
            logger.error(`VideoService.findAll: ${error}`, { keyword: keyword })
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
            logger.error(`VideoService.store: ${error}`, { payload: data })
            return { errors: error, result: null};
        }
    } 

    findById = async (id) => {
        try {
            const result = await Video.findById(id)

            return { errors: [], result: result};
        } catch (error) {
            logger.error(`VideoService.findById: ${error}`, { id: id })
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

            return { errors: [], result: result?._id};
        } catch (error) {
            logger.error(`VideoService.updateById: ${error}`, { id: id, payload: data })
            return { errors: error, result: null};
        }
    }

    deleteById = async (id) => {
        try {
            const result = await Video.findByIdAndDelete(id)

            return { errors: [], result: result};
        } catch (error) {
            logger.error(`VideoService.deleteById: ${error}`, { id: id })
            return { errors: error, result: null};
        }
    }

    patchTotalView = async (id) => {
        try {
            const result = await Video.findByIdAndUpdate(id, {
                $inc : { 'totalView': 1 }
            })

            return { errors: [], result: result?._id};
        } catch (error) {
            logger.error(`VideoService.patchTotalView: ${error}`, { id: id })
            return { errors: error, result: null};
        }
    }
}

export default VideoServices