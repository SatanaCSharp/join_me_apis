const nodeMailer = require('nodemailer');
const config = require('../config');
const emailTemplate = require('../templates/email');

async function sendEmail(emailData) {
    let transporter = await nodeMailer.createTransport(config.smtp);
    await transporter.sendMail({
        from: '"Join Me" <site.join.me@gmail.com>',
        to: emailData.to,
        subject: emailData.subject,
        text: emailData.text,
        html: emailTemplate(emailData['eventData'])
    });
    return await {message: "Email has been sent!"};
}

module.exports = {
    sendEmail
};