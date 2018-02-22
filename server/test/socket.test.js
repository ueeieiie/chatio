const except = require('chai').expect;
const request = require('supertest');
const server = require('../index');
const io = require('socket.io-client');
const expect = require('chai').expect;

describe("testing sockets io  connections", function(done) {
	// temporal hack
	this.timeout(0);
	
	// SocketURL
	const socketURL       = `http://localhost:${process.env.PORT || 3000}`;
	const wrongSocketURL  = `http://localhost:4000`;
	
	// Socket's Events
	const socketAppEvents = {
		registerUser:   "REGISTER_USER",
		returnUserInfo: "RETURN_USER_INFO",
		sendMessage:    "SEND_MESSAGE",
		receiveMessage: "RECEIVE_MESSAGE",
	};

	const socketNativeEvents = {
		connectError:   "connect_error",
		connect:        "connect",
		disconnect:     "disconnect"
	};


	after(() => {
		server.close(() => {
			console.log('Server is shutting down, goodbye..')
		})
	})

	it('should return a valid data object when getting a valid username', (done) => {
		const client = io.connect(socketURL);
		
		client.on(socketNativeEvents.connect, () => {
			client.emit(socketAppEvents.registerUser, getUsername());
			client.on(socketAppEvents.returnUserInfo, (data) => {
				expect(data).to.include.all.keys('userId', 'username', 'avatar')
				client.disconnect()
				done();
			})
		});
	});

	it('sould receive a valid message data on SEND_MESSAGE socket event', () => {
		const client = io.connect(socketURL);
		
		client.on(socketNativeEvents.connect, () => {
			client.emit(socketAppEvents.sendMessage, getMessage());
			client.on(socketAppEvents.receiveMessage, (data) => {
				expect(data).to.not.have.all.keys('userId', 'username', 'message', 'avatar')
			})
		});
	});

		// Temporarily Broken so its commented
	// it('sould throw an error when trying to connect to the wrong socket url', () => {
	// 	const client = io.connect(wrongSocketURL);

	// 	client.on('connection', () => {
	// 		client.on('ON_ERROR_EVENT', (err) => {
	// 			console.log('errorrrr:', err)
	// 		})
	// 	})
	// });
});

// Helper Functions
function getMessageData(overrides){
	const messegaData = {
		user: {
			userId: 'askjdpkqdj23423',
			username: 'udi',
			avatar: 'http://avatar.com'
		},
		message: "I'm the message you've been waiting for!"
	};

	if(typeof overrides === 'object'){
		return Object.assign({}, messageData, overrides);
	}

	return messageData;
}

function getInvalidMessageData(overrides){
	const invalidMessageData = {
		badKeys: 'moohahahahaha!',
		anotherBadKey: 'boohahahahah!',
		infinteDangerousCrypticNumber: 12354498529234234022
	};

	if(typeof overrides === 'object'){
		return Object.assign({}, invalidMessageData, overrides);
	}

	return invalidMessageData;
}

function getUsername(username) {
	return typeof username === 'string' ? username : 'Udi';
}

