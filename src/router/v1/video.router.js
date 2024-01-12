// Dependencies
const express = require('express')

// N-Layer
const VideoServices = require('./../../services/video.services.js')
const VideoController = require('./../../controller/video.controller.js')
const { videoValidation } = require('./../../model/video.model.js')

// Nested Router
const { productVideoRouter } = require('./product.router.js')
const commentRouter = require('./comment.router.js')

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

module.exports = videoRouter