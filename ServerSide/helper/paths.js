var path = require("path");

const publicDir = path.join(__dirname, "../public/");
const exportedAvatarPath = path.join(publicDir, "avatar/");
const exportedCoverPath = path.join(publicDir, "cover/");

console.log(" publicDir", publicDir)
console.log("exportedAvatarPath",exportedAvatarPath)
console.log("exportedCoverPath",exportedCoverPath)

const paths = {
  publicDir: publicDir,
  userAvatar: exportedAvatarPath,
  bookCover: exportedCoverPath,
};

module.exports = paths;
