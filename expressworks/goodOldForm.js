var express = require('express')
var bodyParser = require('body-parser')

var app = express()
	app.use(bodyParser())
	app.post('/form', function (req, res) {
		    res.end(req.body.str.split('').reverse().join(''))
	})
app.listen(process.argv[2])
