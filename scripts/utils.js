const fs = require("fs");
const path = require("path");

exports.getCwd = function(filePath = ".") {
  const $path = path.join(process.cwd(), String(filePath));

  const types = {
    path: path.resolve($path),
    files: [],
    dirs: []
  };

  fs.readdirSync($path).forEach(e => {
    const stats = fs.statSync(path.join($path, e));
    if (stats.isDirectory()) types.dirs.push(e);
    if (stats.isFile()) types.files.push(e);
  });

  return types;
};
