var http = require('http'),
var fs = require('fs'),
var port = process.argv[2],
var ath = process.argv[3];

var server = http.createServer(function(request, response){
	    var file = fs.createReadStream(path);
	        file.pipe(response);
});

server.listen(port);
