var path = require("path");

const publicDir = path.join(__dirname, "../public/");
const exportedAvatarPath = path.join(publicDir, "avatar/");
const exportedCoverPath = path.join(publicDir, "cover/");

console.log("\u{1F3CB}\u{FE0F}\u{200D}\u{2642}\u{FE0F} publicDir=", publicDir)
console.log("\u{1F9D8}\u{200D}\u{2640}\u{FE0F} exportedAvatarPath=",exportedAvatarPath)
console.log("\u{1F955} exportedCoverPath=",exportedCoverPath)

const paths = {
  publicDir: publicDir,
  userAvatar: exportedAvatarPath,
  bookCover: exportedCoverPath,
};

module.exports = paths;
