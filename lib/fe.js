const request = require('request');
const fs = require('fs');

const checkFEmodules = require('./check-for-femodules')
const installPkg = require('./install-pkg');

module.exports = function(opts) {
  var pkg = opts.pkg;
  request('http://registry.npmjs.com/' + pkg, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var pkgdata = JSON.parse(body);
      if (!version) {
        var version = opts.version || pkgdata["dist-tags"].latest;
      }
      var URL = pkgdata.versions[version].dist.tarball;
      console.log("fetching... " + URL);
      if (!checkFEmodules()) {
        fs.mkdirSync('fe_modules');
      }
      installPkg({ pkg: pkg, URL: URL });
    } else {
      throw(error);
    }
  });
};
