// Dependencies
import express from "express";

// N-Layer
import VideoServices from "../../services/video.services";
import VideoController from "../../controller/video.controller";
import { videoValidation } from "../../model/video.model";

// Nested Router
import { productVideoRouter } from "./product.router";
import commentRouter from "./comment.router";

const videoSvc = new VideoServices();
const videoController = new VideoController(videoSvc, videoValidation)

const videoRouter = express.Router();

videoRouter.get('/', videoController.index)
videoRouter.post('/', videoController.store)
videoRouter.get('/:id', videoController.show)
videoRouter.put('/:id', videoController.update)
videoRouter.patch('/:id', videoController.patch)
videoRouter.delete('/:id', videoController.destroy)

videoRouter.use('/:id/products', productVideoRouter)
videoRouter.use('/:id/comments', commentRouter)

export default videoRouter