// clean up type definition folder
// since Microsoft won't clean them
// https://github.com/Microsoft/TypeScript/issues/13722

const fs = require('fs');

function rimraf(path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(file => {
      const curPath = path + "/" + file;
      if (fs.lstatSync(curPath).isDirectory()) {
        rimraf(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
}

rimraf('@types');
