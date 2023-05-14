const Post = require("../../model/post/Post");
const User = require("../../model/user/User");
const Comment = require("../../model/comment/Comment");
const appErr = require("../../utils/appErr");

const createCommentCtrl = async (req, res, next) => {
  const { message } = req.body;
  try {
    //find the post
    const post = await Post.findById(req.params.id);
    //create the comment
    const comment = await Comment.create({
      user: req.session.userAuth,
      message,
    });

    // push the comment to post
    post.comments.push(comment._id);

    // find the user
    const user = await User.findById(req.session.userAuth);

    // push the comment into user
    user.comments.push(comment._id);

    // disable validation
    // save
    await post.save({ validateBeforeSave: false });
    await user.save({ validateBeforeSave: false });

    res.json({
      status: "success",
      data: comment,
    });
  } catch (error) {
    res.json(error);
    next(appErr(error.message));
  }
};

module.exports = {
  createCommentCtrl,
};
