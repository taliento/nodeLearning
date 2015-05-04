var net = require('net');

function addZ(n){
	return n < 10 ? '0' + n : '' + n;
}

var server = net.createServer(function (socket) {
	var date = new Date();
	var formatDate = date.getFullYear()+"-"+addZ(date.getMonth()+1)+"-"+addZ(date.getDate())+" "+addZ(date.getHours())+":"+addZ(date.getMinutes());
	socket.end(formatDate+"\n");
});
server.listen(process.argv[2]);

