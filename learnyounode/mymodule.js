var fs = require('fs');
var path = require('path');
module.exports = function(pathToDir, extension, callback){

	fs.readdir(pathToDir,function (err, files){

		if (err) return callback(err);
		
		var list = [];
		var i = 0;

		files.forEach(function(file){
			if(path.extname(file) === '.'+extension){
				list[i] = file;
				i++;
			}	

		});

		return callback(null,list);

	});	
};

