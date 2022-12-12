const nodemailer = require("nodemailer");
require("dotenv").config();

const { EMAIL, EMAILPASSWORD } = process.env;

sendEmail = async () => {
    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: `${EMAIL}`,
            pass: `${EMAILPASSWORD}`,
        },
    });
    return transport;
};

const message = async (email, subject, body) => {
    const transport = await sendEmail();
    await transport.sendMail({
        from: `${EMAIL}`,
        to: `${EMAIL}`,
        subject: `mail de ${email}, el asunto es: ${subject}`,
        text: body,
    });
    return message;
};

module.exports = message;
