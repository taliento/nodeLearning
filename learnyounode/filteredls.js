var fs = require('fs');
var path = require('path');
var pathToDir = process.argv[2];
var extension = process.argv[3];
fs.readdir(pathToDir,function (err, files){
	if (err) throw err;

	files.forEach(function(file){
		if(path.extname(file) === '.'+extension){
			console.log(file);
		}	
	});
});

