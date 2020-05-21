const mongoose = require("mongoose");
const User = mongoose.model("User");

const userParams = (req, res, next, id) => {
  User.findById(id)
    .then(function (user) {
      if (!user) {
        return res.sendStatus(404);
      }
      req.user = user;
      return next();
    })
    .catch(next);
};

module.exports = userParams;
