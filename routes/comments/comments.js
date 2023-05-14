const express = require("express");
const commentRouter = express.Router();
const { createCommentCtrl } = require("../../controllers/comments/comments");

const protected = require("../../middlewares/protected");

//POST
commentRouter.post("/:id", protected, createCommentCtrl);

module.exports = commentRouter;
