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
require('./socket')(io);
