const express = require('express');
const http = require('http');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

const server = http.createServer(app);
const io = require('socket.io')(server);
server.listen(3000);

var users = [];

io.on('connection', (socket) => {
    console.log('Hello person :', socket.id);
    //hiển thị rooms, mặc định mỗi kết nối sẽ tự tạo 1 room mới chứa 1 socket của chính nó.
    console.log(socket.adapter.rooms);

    socket.on('Client-send-login', (data) => {
        if (users.indexOf(data) >= 0) {
            //fail
            socket.emit('Server-send-login-fail');
        } else {
            //true
            users.push(data);
            socket.userName = data;
            socket.emit('Server-send-login-success', data);
            io.sockets.emit('Server-send-users', users);
        }
    });
    socket.on('logout', () => {
        users.splice(users.indexOf(socket.userName),1);
        socket.broadcast.emit('Server-send-users', users);
    });
    socket.on('User-send-message', (data) => {
        io.sockets.emit('Server-send-message', {us: socket.userName, ms: data});
    });
    socket.on('Client-typing', () => {
        socket.broadcast.emit('Server-send-typing', socket.userName);
    });
    socket.on('Client-stop-typing', () => {
        socket.broadcast.emit('Server-send-stop-typing');
    });

});
 
app.get('/', (req, res, next) => {
    res.render('trangchu');
});