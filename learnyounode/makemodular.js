var module = require("./mymodule");
var dir = process.argv[2];
var ext = process.argv[3];

module(dir,ext, function(err,list){
	if(err) console.error("There was an error: "+err);
	list.forEach(function(file){
		console.log(file);
	});
});
