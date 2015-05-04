var http = require('http')
var url = require('url')

function parsetime (time) {
	return { hour: time.getHours(), minute: time.getMinutes(),
		second: time.getSeconds() }
}
function unixtime (time) { return { unixtime : time.getTime() } }
http.createServer(function (req, res) {
	var parsedUrl = url.parse(req.url, true)
	var time = new Date(parsedUrl.query.iso)
	var result
	if (/^\/api\/parsetime/.test(req.url))
	result = parsetime(time, res)
	else if (/^\/api\/unixtime/.test(req.url))
	result = unixtime(time, res)
	if (result) {
		res.writeHead(200, { 'Content-Type': 'application/json' })
	return res.end(JSON.stringify(result))
	}
res.writeHead(404)
	res.end()
}).listen(process.argv[2])

