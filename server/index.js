// Dependencies
const express = require('express');
const socket = require('socket.io');
const path = require('path');
const uuid = require('uuid/v4');
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
const users = [];
const messages = [];


io.on('connection', (socket) => {
	connections.push(socket);
	console.log('Connected: %s sockets are active', connections.length);

	socket.on('REGISTER_USER', (data) => {
		const newUser = createNewUser(data);
		socket.emit('RETURN_USER_INFO', newUser);
	});


	socket.on('SEND_MESSAGE', (data) => {
		const { userId, avatar, username } = data.user;
		const { message } = data;
		io.emit("RECEIVE_MESSAGE", {userId, username, message, avatar,});
	})

	socket.on('disconnect', (data) => {
		connections.splice(connections.indexOf('socket'), 1);
		console.log('Disconnected: %s sockets are active', connections.length);
	})
});

const createNewUser = username => {
	const userId = createUserId();
	const avatar = createAvatar(username, userId);

	users.push({userId, username, avatar});
	
	return {userId, username, avatar};
}

const createUserId = () => {
	const userId = uuid();
	return userId;
}

const createAvatar = (username, id) => {
	return `https://robohash.org/${username}${id}.png`;
}