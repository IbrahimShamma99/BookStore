var mongoose = require("mongoose");
var User = mongoose.model("User");

const adduser = (req, res, next) => {
  const UserInfo = req.body.user;
  if (!UserInfo) {
    return res
      .status(422)
      .send({ error: "Data not being provided", success: false });
  }
  if (!UserInfo.email) {
    return res
      .status(422)
      .send({ error: "please provide email", success: false });
  }
  if (!UserInfo.password) {
    return res
      .status(422)
      .send({ error: "please provide password", success: false });
  }
  const user = new User();
  try {
    user.initInfo(UserInfo);
  } catch (e) {
    console.log(e);
    return res.status(422).send({
      error: "error during registeration",
    });
  }

  user.save(function (err) {
    if (err) {
      if (err.name === "MongoError" && err.code === 11000) {
        return res
          .status(422)
          .send({ success: false, error: "User already exist!" });
      }
      return res.status(422).send(err);
    }
    res.status(202).json({
      user: user.toAuthJSON(),
    });
  });
};

const fetchUserViaUsername = (req, res) => {
  const username = req.query.username;
  User.findOne({ username }).then((user) => {
    if (!user) {
      return res.status(422).json({ error: "User not found" });
    }

    return res.status(202).send({ user: user.toJSON() });
  });
};

const login = async (req, res, next) => {
  const UserInfo = req.body.user;
  console.log(UserInfo);
  if (!UserInfo.email) {
    return res.send(422).json({ error: "please provide email " });
  }
  if (!UserInfo.password) {
    return res.status(422).json({ error: "can't be blank" });
  }
  await User.findOne({ email: UserInfo.email })
    .then((user) => {
      if (!user) {
        return res.status(422).json({ error: "User not found" });
      }
      if (user.validPassword(UserInfo.password)) {
        console.log("Valid")
        return res.status(202).json(user.toAuthJSON());
      } else {
        console.log("Not valid")
        return res.status(422).send({ error: "authentication error" });
      }
    })
    .catch(() => {
      return res.status(422).send({ error: "Email not valid" });
    });
};

const uploadAvatar = (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
};

const updateUser = (req, res) => {
  const updateData = req.body.user;
  const user = req.user;
  if (!user) {
    return res.sendStatus(401).send({
      success: false,
      error: "please provide what you want to update",
    });
  }
  if (req.file) {
    user.avatar = req.file;
    return user
      .save()
      .then(function () {
        return res.status(202).send({
          user: user.toAuthJSON(),
        });
      })
      .catch(() => {
        res.status(422).send({ success: false, error: "couldn't update user" });
      });
  }
  user.assignInfo(updateData);
  return user
    .save()
    .then(function () {
      return res.status(202).send({
        user: user.toAuthJSON(),
      });
    })
    .catch(() => {
      res.status(422).send({ success: false, error: "couldn't update user" });
    });
};

const followUser = (req, res, next) => {
  const userInfo = req.body.user;
  const followedInfo = req.body.followed;
  if (!userInfo) {
    res.status(422).send({ success: false, message: "User not provided" });
  }
  if (!followedInfo) {
    res.status(422).send({ success: false, message: "Followed not provided" });
  }
  User.findById(userInfo._id)
    .then((user) => {
      User.findById(followedInfo._id)
        .then((followed) => {
          if (!user) {
            res.status(422).send({ success: false, message: "User not found" });
          }
          if (!followed) {
            res
              .status(422)
              .send({ success: false, message: "followed not found" });
          }

          user.following.push(followed);
          followed.followedBy.push(user);
          user.save();
          followed.save();

          return res.status(202).send({
            user: user.toAuthJSON(),
            success: true,
          });
        })
        .catch(next);
    })
    .catch(next);
};

const logout = (req, res) => {
  return res.status(202).send({
    message: "Logged out!",
    user: {},
    success: true,
  });
};

const UserControler = {
  adduser,
  login,
  uploadAvatar,
  logout,
  updateUser,
  followUser,
  fetchUserViaUsername,
};

module.exports = UserControler;
