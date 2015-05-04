var fs = require('fs')
var pathToFile = process.argv[2];
fs.readFile(pathToFile,'utf-8',function (err, data){

	if (err) throw err;

	var lines = data.split('\n');
	console.log(lines.length-1);
});

