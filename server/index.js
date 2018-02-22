// Dependencies
const app = require('express')();
const staticFiles = require('express').static;
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');
const PORT = process.env.PORT || 3000;

// Static Files
app.use(staticFiles(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
	res.send('ok');
});

server.listen(PORT, () => {
	console.log(`Server runs on port ${PORT}`);
});

// Socket setup
require('./socket')(io);

module.exports = server;
