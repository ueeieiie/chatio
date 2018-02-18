// Dependencies
const express = require('express');
const socket = require('socket.io');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();

// Static Files
app.use(express.static(path.join(__dirname, '../client/dist')));

const server = app.listen(PORT, () => {
	console.log(`Server runs on port ${PORT}`);
});

// Socket setup
const io = socket(server);
const connections = [];

io.on('connection', (socket) => {
	connections.push(socket);
	console.log('Connected: %s sockets are active', connections.length);

	socket.on('SEND_MESSAGE', (data) => {
		console.log('before send message', data)
		io.emit("RECEIVE_MESSAGE", data);
		console.log('after send message', data)
	})

	socket.on('disconnect', (data) => {
		console.log('before disconnect')	
		connections.splice(connections.indexOf('socket'), 1);
		console.log('Disconnected: %s sockets are active', connections.length);
	})

	socket.on('error', console.error)
});