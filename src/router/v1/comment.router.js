// Dependencies
const express = require('express')

// N-Layer
const CommentServices = require('./../../services/comment.services.js')
const CommentController = require('./../../controller/comment.controller.js')
const { commentValidation } = require('./../../model/comment.model.js')

const commentSvc = new CommentServices();
const commentController = new CommentController(commentSvc, commentValidation)

const commentRouter = express.Router({
    mergeParams: true
});

commentRouter.get('/', commentController.index)
commentRouter.post('/', commentController.store)

module.exports = commentRouter