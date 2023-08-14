// Dependencies
import { Server } from "socket.io";


const socketIo = new Server();

const initSocketIo = (httpServer) => {
    socketIo.attach(httpServer, {
        cors: {
            origin: "*"
        }
    });
}


export { socketIo }

export default initSocketIo