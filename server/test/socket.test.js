const except = require('chai').expect;
const request = require('supertest');
const server = require('../index');
const io = require('socket.io-client');

describe("testing sockets io  connections", function(done) {
	this.timeout(0);
	const socketURL = `http://localhost:${process.env.PORT || 3000}`;
	const socketEvents = {
		registerUser: "REGISTER_USER",
		returnUserInfo: "RETURN_USER_INFO",
		sendMessage: "SEND_MESSAGE",
		receiveMessage: "RECEIVE_MESSAGE"
	};

	const user = 'udi'

	afterEach(() => {
		server.close(() => {
			console.log('server was closed')
		})
	})

	it('testttt', (done) => {
		const client = io.connect(socketURL);
		
		client.on('connect', () => {
			client.emit(socketEvents.registerUser, {user});
			client.on(socketEvents.returnUserInfo, (data) => {
				console.log('data:', data);
			})
		});
	})
});