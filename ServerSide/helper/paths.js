var path = require("path");

const exportedAvatarPath = path.join(__dirname, "../public/avatar/");

const paths = {
  userAvatar: exportedAvatarPath,
};

module.exports = paths;
