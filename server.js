var express = require('express'), app = express(),
	path = require('path'), http = require('http').Server(app),
	io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, './www')));

io.on('connection', function(socket) {
	socket.on('message', function(message) {
		console.log(message);
	});
	socket.emit('messageLog', 'Here is your server response.');
});

http.listen(4664, function() {
	console.log('Listening on port: 4664');
});