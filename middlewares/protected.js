const appErr = require("../utils/appErr");

const protected = (req, res, next) => {
  // check if user is login
  if (req.session.userAuth) {
    next();
  } else {
    next(appErr("Not authorized, Please login again", 400));
  }
};

module.exports = protected;
