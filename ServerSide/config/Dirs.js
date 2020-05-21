const path = require("path");
const PublicDir = path.join(__dirname, "../public/");
const AvatarDir = path.join(__dirname, "../public/avatar/");
console.log("\u{1F9F1} CWD Backend \u{1F9F1} ", __dirname);
console.log("\u{1F9F1} CWD exported static \u{1F9F1} ", AvatarDir);

//SECTION Add here exported Dirs for you client side app
const Dirs = [PublicDir, AvatarDir];

module.exports = Dirs;
