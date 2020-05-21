const fs = require("fs");
const Dirs = require("./Dirs");
const CreateDir = (Dir) => {
  if (!fs.existsSync(Dir)) {
    fs.mkdirSync(Dir);
  }
};

const CreateDirs = () => {
  Dirs.map((dir) => {
    CreateDir(dir);
  });
};

module.exports = CreateDirs;
