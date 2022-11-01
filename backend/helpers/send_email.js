const nodemailer = require("nodemailer");

// EMAIL SENT OUTLOOK

// const transporter = nodemailer.createTransport({
//   service: "hotmail",
//   tls: { rejectUnauthorized: false },
//   auth: {
//     user: process.env.EMAIL_USERNAME,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// });

// const mailOptions = {
//   from: process.env.EMAIL_USERNAME,
//   to: "khodorhassoun26@gmail.com",
//   subject: "Subject",
//   text: "Email content",
// };
// const sendEmail = () => {
//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Email sent: " + info.response);
//       // do something useful
//     }
//   });
// };

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   tls: { rejectUnauthorized: false },
//   auth: {
//     user: process.env.EMAIL_USERNAME,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// });

// const mailOptions = {
//   from: process.env.EMAIL_USERNAME,
//   to: "khodorhassoun@outlook.com",
//   subject: "Subject",
//   text: "Email content",
// };
// const sendEmail = () => {
//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Email sent: " + info.response);
//       // do something useful
//     }
//   });
// };
const registerEmail = (userEmail, password) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    tls: { rejectUnauthorized: false },
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: userEmail,
    subject: "Log in credentials",
    text: password,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      // do something useful
    }
  });
};

// module.exports = sendEmail;
module.exports = registerEmail;
