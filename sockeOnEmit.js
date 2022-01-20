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

io.on('connection', (socket) => {
    console.log('Hello person :', socket.id);

    socket.on('disconnect', () => {
        console.log(socket.id, ': time out');
    });

    socket.on('Client-send-data', (data) => {
        console.log(data);
        // io.sockets.emit('Server-send-data', data + "888");
        // socket.emit('Server-send-data', data + "888");
        socket.broadcast.emit('Server-send-data', data + "888");
    });
});
 
app.get('/', (req, res, next) => {
    res.render('trangchu');
});