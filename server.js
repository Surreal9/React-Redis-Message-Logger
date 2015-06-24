var express = require('express'), app = express();
var	path = require('path'), http = require('http').Server(app);
var io = require('socket.io')(http), redis = require('redis');
var database = redis.createClient();

app.use(express.static(path.join(__dirname, './www')));

database.on('connect', function() {
	console.log('Connected');

});

io.on('connection', function(socket) {
	socket.on('message', function(message) {
		console.log('Client message: ' + message);
		database.set('log', message);
	});
	// socket.emit('messageLog', 'Here is your server response.');
	database.get('log', function(error, response) {
		console.log('Database response: ' + response);
		socket.emit('messageLog', response);
	});
});

http.listen(4664, function() {
	console.log('Listening on port: 4664');
});