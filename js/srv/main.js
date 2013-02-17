var app = require('http').createServer(handler).listen(80);
var io = require('socket.io').listen(app);
var static = require('node-static');
var file = new(static.Server)();

function handler (request, response) {
	file.serve(request, response);
}

// On connect
io.sockets.on('connection', function (socket) {
	var messageList = [];

	socket.emit('message', [{username: "Server", message: "Welcome to jChat application!"}]);

	socket.on('new-message', function(data) {
		socket.broadcast.emit('message', [data])
	});
});