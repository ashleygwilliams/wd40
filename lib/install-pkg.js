const request = require('request');
const targz = require('tar.gz');

module.exports = function(opts) {
  var pkg = opts.pkg;
  var URL = opts.URL;
  var read = request.get(URL);
  var write = targz().createWriteStream('./fe_modules/' + pkg);
  
  write.on('entry', function(entry) {
    console.log(entry.path);
  });
  read.pipe(write);
  console.log('  install %s', pkg);
};
