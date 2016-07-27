const fs = require('fs');

module.exports = function() {
  try {
    var stats = fs.lstatSync('fe_modules');
  } catch(e) {
    console.log(e);
    return false;
  }
  if (stats.isDirectory()) {
    return true;
  }
  return false;
 };
