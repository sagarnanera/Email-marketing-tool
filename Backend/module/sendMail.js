const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config('../.env');

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_ID_PASS
    }
});

const sendMail = async (sender, sendingdata, recievers, callback) => {


    console.log(process.env.MAIL_ID, process.env.MAIL_ID_PASS);

    const mailOpts = {
        from: {
            name: sender.name,
            address: process.env.MAIL_ID
        },
        bcc: recievers,
        subject: sendingdata.subject,
        text: 'Some content to send',
        html: sendingdata.html
    };


    transport.sendMail(mailOpts, function (error, info) {
        callback(error, info);
    });
}

module.exports = sendMail;