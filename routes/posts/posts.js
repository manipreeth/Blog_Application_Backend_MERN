const express = require("express");
const postRouter = express.Router();
const {
  createPostCtrl,
  fetchPostsCtrl,
  fetchPostCtrl,
  deletePostCtrl,
} = require("../../controllers/posts/posts");

const protected = require("../../middlewares/protected");
const multer = require("multer");
const storage = require("../../config/cloudinary");

//* Instance of multer
const upload = multer({ storage });

//POST
postRouter.post("/", protected, upload.single("postImage"), createPostCtrl);

//GET
postRouter.get("/", fetchPostsCtrl);

//GET/:id
postRouter.get("/:id", fetchPostCtrl);

//DELETE/:id
postRouter.delete("/:id", protected, deletePostCtrl);

module.exports = postRouter;
