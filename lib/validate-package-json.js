const semver = require('semver');

module.exports = {
  "json": function(json) {
      try {
        JSON.parse(json);
      } catch(e) {
        console.log(e);
        process.exit(1);
      }
   },
   "semver": function(json) {
      var pkgs = Object.keys(JSON.parse(json).fe);
      try {
        pkgs.forEach(function(pkg) {
          var ver = pkgs[pkg];
          if (!semver.valid(ver)) {
            throw new Error(ver + " is not valid semver. " + 
              "Please provide a valid semver range for " + pkg + ".");
          }
        });
      } catch(e) {
        console.log(e);
        process.exit(1);
      }
    }
}
