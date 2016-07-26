const request = require('request');
const fs = require('fs');
const extract = tar.extract();

module.exports = function(pkg) {
  request('http://registry.npmjs.com/' + pkg, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var pkgdata = JSON.parse(body);
      var latest = pkgdata["dist-tags"].latest;
      var URL = pkgdata.versions[latest].dist.tarball;
      console.log("fetching... " + URL);
      try {
        fs.lstatSync('fe_modules');
      } catch(e) {
        fs.mkdirSync('fe_modules');
      }
      console.log('  install %s', pkg);
      request(URL).pipe(fs.createWriteStreaam('./fe_modules/' + pkg + '.tgz'));

    } else {
      throw(error);
    }
  });
};
