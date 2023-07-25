// Dependencies
import express from "express";

// N-Layer
import CommentServices from "../../services/comment.services";
import CommentController from "../../controller/comment.controller";
import { commentValidation } from "../../model/comment.model";

const commentSvc = new CommentServices();
const commentController = new CommentController(commentSvc, commentValidation)

const commentRouter = express.Router({
    mergeParams: true
});

commentRouter.get('/', commentController.index)
commentRouter.post('/', commentController.store)

export default commentRouter