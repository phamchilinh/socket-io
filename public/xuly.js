var socket = io('http://localhost:3000/');
socket.on('Server-send-login', (data) => {
    if (data) {
        $('#loginForm').hide();
        $('#chatForm').show();
    }
});
$(document).ready(() => {
    $('#loginForm').show();
    $('#chatForm').hide();

    $('#btnRegister').click(() => {
        socket.emit('Client-send-A',
            $('#txtUserName').val()
        );
    });
});