var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'jade');
//app.set('views', path.join(__dirname, process.argv[3]));

app.get('/home', function(req, res) {
	res.render(process.argv[3], {date: new Date().toDateString()});

})
app.listen(process.argv[2]);

