var fs = require('fs');
var vm = require('vm');
var path = require('path');
var includePath = require('include-path');
var Bundle = require('./bundle');

exports.setupBundle = function(bundle) {
	bundle.getLoadPaths().forEach(function(path) {
		includePath(path);
	});

	bundle.getDependencies().forEach(function(depPath) {
		var bundlePath = path.join(depPath, 'Nodebundle.js');

		if (fs.existsSync(bundlePath)) {
			exports.loadBundle(bundlePath);
		}
	});
};

exports.loadBundle = function(bundlePath) {
	var bundle = new Bundle(path.dirname(bundlePath));
	var content = fs.readFileSync(bundlePath);
	var script = '(function(bundle){\n' + content + '\n})';
	var fn = vm.runInThisContext(script);

	fn(bundle);

	exports.setupBundle(bundle);
};

