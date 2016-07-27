const fs = require('fs');
const validate = require('./validate-package-json');

module.exports = function() {
  try {
    var stats = fs.lstatSync('package.json');
  } catch(e) {
    console.log(e);
  }
  if (stats.isFile()) {
    var json = fs.readFileSync('package.json', 'utf-8');
    validate.json(json);
    validate.semver(json);
    return json;
  } else {
    return new Error('you must provide package names or a package.json');
  }
};
