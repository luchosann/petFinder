import { Server } from "socket.io";
import { userJoin, 
        getCurrentUser,
        userLeave,
        getRoomUsers } from "./utils/user";
import { formatMessage } from "./utils/messages";

const activeSockets = {};

export default function SocketHandler(req, res) {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"]
      }
    });

    res.socket.server.io = io;

    io.on('connection', (socket) => {
      socket.on('joinRoom', ({username, room}) => {
          const user = userJoin(socket.id, username, room);

          socket.join(user.room);

          io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
          })
      })

      socket.on('chatMessage', (msg) => {
          const user = getCurrentUser(socket.id);
          io.to(user.room).emit('message', formatMessage(user.username, msg));
      })

      socket.on('disconnect', () => {
        const user = userLeave(socket.id);

        io.to(user.room).emit('roomUsers', {
          room: user.room,
          users: getRoomUsers(user.room)
        });
      });
    });

    console.log("Setting up socket");
  }

  res.end();
}
