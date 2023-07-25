// Dependencies
import express from "express";

// ....
import VideoServices from "../../services/video.services";
import VideoController from "../../controller/video.controller";
import { videoValidation } from "../../model/video.model";

const videoSvc = new VideoServices();
const videoController = new VideoController(videoSvc, videoValidation)

const videoRouter = express.Router();

videoRouter.get('/', videoController.index)
videoRouter.post('/', videoController.store)
videoRouter.get('/:id', videoController.show)
videoRouter.put('/:id', videoController.update)
videoRouter.delete('/:id', videoController.destroy)

export default videoRouter