const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('A user connected');

    // Listen for messages from the client
    socket.on('message', (data) => {
        console.log('Received message:', data);

        // Broadcast the message to all connected clients
        io.emit('message', data);
    });

    // Listen for disconnect event
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const port = 8000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
