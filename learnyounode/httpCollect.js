var bl = require('bl');
var http = require('http');
var url = process.argv[2];



http.get(url, function(res) {
	  res.setEncoding('utf8');
	  res.pipe(bl(function (err, data) {
          	if(err)
		  return console.error(err)
		  
		 console.log(data.length); 
		 console.log(data.toString());
	  }));

}).on('error', function(e) {
	  console.error("Got error: " + e.message);
});
