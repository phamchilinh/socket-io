var socket = io('http://localhost:3000/');
socket.on('Server-send-login-fail', () => {
    alert('User name is existed');
});
socket.on('Server-send-login-success', (data) => {
    $('#loginForm').hide(2000);
    $('#chatForm').show(1000);
    $('#currentUser').html(data);
});
socket.on('Server-send-users', (data) => {
    $('#boxContent').html("");
    data.forEach(element => {
        $('#boxContent').append(` <div class='userOnline'>${element}</div>`);
    });
});
socket.on('Server-send-message', (data) => {
    $('#listMessage').append(`<div class='ms'>${data.us} : ${data.ms}</div>`);
});
socket.on('Server-send-typing', (data) => {
    $('#thongbao').html(data +": <img width='30px' src='chat-typing.gif'>");
});
socket.on('Server-send-stop-typing', () => {
    $('#thongbao').html("");
});
$(document).ready(() => {
    $('#loginForm').show();
    $('#chatForm').hide();

    $('#btnRegister').click(() => {
        socket.emit('Client-send-login',
            $('#txtUserName').val()
        );
    });

    $('#txtMessage').focusin(() => {
        socket.emit('Client-typing');
    });

    $('#txtMessage').focusout(() => {
        socket.emit('Client-stop-typing');
    });

    $('#btnLogout').click(() => {
        socket.emit('logout');
        $('#loginForm').show(2000);
        $('#chatForm').hide(1000);
    });
    $('#btnSend').click(() => {
        socket.emit('User-send-message', $('#txtMessage').val());
        $('#txtMessage').val('');
    });
});
