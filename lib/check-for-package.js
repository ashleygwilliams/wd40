const fs = require('fs');

module.exports = function() {
  try {
    var stats = fs.lstatSync('package.json');
  } catch(e) {
    console.log(e);
  }
  if (stats.isFile()) {
    return true;
  } else {
    return new Error('you must provide package names or a package.json');
  }
};
