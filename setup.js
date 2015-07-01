var fs = require('fs');
var path = require('path');
var Bundler = require('./index');

var searchPath = path.dirname(module.parent.filename);

while (searchPath != '/') {
	var bundlePath = path.join(searchPath, 'Bundlefile.js');

	if (fs.existsSync(bundlePath)) {
		Bundler.loadBundle(bundlePath);
		break;
	}

	searchPath = path.dirname(searchPath);
}

