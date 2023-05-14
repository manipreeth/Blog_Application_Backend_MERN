const express = require("express");
const userRoutes = express.Router();
const multer = require("multer");
const storage = require("../../config/cloudinary");

const {
  registerCtrl,
  loginCtrl,
  userPostsCtrl,
  profileCtrl,
  updateUserCtrl,
  logoutCtrl,
} = require("../../controllers/users/users");

const protected = require("../../middlewares/protected");

// Instance of multer
const upload = multer({ storage });

//POST/register
userRoutes.post("/register", registerCtrl);

//POST/login
userRoutes.post("/login", loginCtrl);

//GET/profile
userRoutes.get("/profile", protected, profileCtrl);

//PUT/update user details
userRoutes.put(
  "/update",
  upload.single("profileImage"),
  protected,
  updateUserCtrl
);

//GET/posts
userRoutes.get("/posts", protected, userPostsCtrl);

//GET/logout
userRoutes.get("/logout", logoutCtrl);

module.exports = userRoutes;
