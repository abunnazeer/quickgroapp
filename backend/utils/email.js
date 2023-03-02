const nodemailer = require('nodemailer');
// const smtpTransport = require('nodemailer-smtp-transport');

const sendEmail = async options => {
  //create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    // secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  // define the email option
  const mailOptions = {
    from: 'Abdullahi Ahmad <ahmad@beenai.com.ng>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    //   html:
  };
  //send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
