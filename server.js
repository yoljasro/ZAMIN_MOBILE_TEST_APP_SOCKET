const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Notify Socket.IO events
io.on('connection', (socket) => {
  console.log('A new user connected');

  socket.on('joinRoom', (roomId) => {
    socket.join(roomId);
    console.log(`User joined room ${roomId}`);
  });

  socket.on('sendMessage', (message) => {
    io.to(message.roomId).emit('receiveMessage', message);
    console.log(`Message sent to room ${message.roomId}: ${message.text}`);
  });
});

// Add API endpoints
app.use('/', routes);

// Use middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});