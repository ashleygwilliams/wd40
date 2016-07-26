const request = require('request');

module.exports = function(package_name) {
  request('http://registry.npmjs.com/' + package_name, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var pkgdata = JSON.parse(body);
      var latest = pkgdata["dist-tags"].latest;
      return console.log(pkgdata.versions[latest].dist.tarball);
    } else {
      console.log(error);
    }
  });
};
