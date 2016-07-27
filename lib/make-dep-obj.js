module.exports = {
  "from_package" : function(deps) {
    var result = [];
    var pkgs = Object.keys(deps);
    pkgs.forEach(function(pkg){
      result.push({
        pkg: pkg,
        version: deps[pkg]
      }); 
    });
    return result;
  },
  "from_cli": function(deps) {
    return deps.map(function(dep) {
      return {
        pkg: dep,
        version: null
      };
    })
  }
};
