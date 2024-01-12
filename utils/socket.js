// Dependencies
const Server = require('socket.io').Server

const socketIo = new Server();

const initSocketIo = (httpServer) => {
    socketIo.attach(httpServer, {
        cors: {
            origin: "*"
        }
    });
}

module.exports = {
    socketIo,
    initSocketIo
}