const multer = require("multer");
var path = require("path");
var {paths} = require("../helper/")
var AvatarStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(paths.bookCover));
  },
  filename: function (req, file, cb) {
    cb(null, new Date().getTime() + "-" + file.originalname);
  },
});

var uploadCover = multer({
  storage: AvatarStorage,
  limits: { fileSize: 1024 * 1024 * 5 },
});

module.exports = uploadCover;
