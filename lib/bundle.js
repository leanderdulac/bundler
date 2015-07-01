var path = require('path');

var Bundle = function(root) {
	this.root = root;
	this.dependencies = {};
};

Bundle.prototype.dependency = function(name, path) {
	this.dependencies[name] = path;
};

Bundle.prototype.getLoadPaths = function() {
	var paths = [];

	if (this.requirePath) {
		paths.push(path.join(this.root, this.requirePath));
	}

	return paths;
};

Bundle.prototype.getDependencies = function() {
	var paths = [];

	for (var key in this.dependencies) {
		var depPath = this.dependencies[key];

		paths.push(path.join(this.root, depPath));
	}

	return paths;
};

module.exports = Bundle;

