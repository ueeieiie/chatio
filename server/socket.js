// Dependencies
const uuid = require('uuid/v4');

const connections = [];
const users = [];
const messages = [];

module.exports = (io) => {
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

		socket.on('error', (err) => {
			throw new Error('Errrrrr');
			socket.emit('ON_ERROR_EVENT', {err: 'You have an error'})
		})
	});
};

const createNewUser = username => {
	const userId = uuid();
	const avatar = createAvatar(username, userId);

	users.push({userId, username, avatar});
	
	return {userId, username, avatar};
}


const createAvatar = (username, id) => {
	return `https://robohash.org/${username}${id}.png`;
}