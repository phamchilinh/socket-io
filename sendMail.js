const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'linhpc.bhsoft@gmail.com',
        pass: '*********'
    }
});

var optionMail = {
    from: 'linhpc.bhsoft@gmail.com',
    to: 'jokerlinh1998@gmail.com',
    subject: 'Linh test nodemailer nodejs',
    text: 'Hello successful mail!',
};

transporter.sendMail(optionMail, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});