// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "khodorhassoun26@gmail.com",
//     pass: process.env.EMAIL_PASSWORD,
//   },
// });

// const options = {
//   from: "khodorhassoun26@gmail.com",
//   to: "khodorhassoun@outlook.com",
//   subject: "Testing",
//   text: " this is text",
// };
// const sendEmail = () => {
//   transporter.sendMail(options, (err, info) => {
//     if (err) {
//       console.log("EEEEEEEEEEEEEEEEEEEEEEE");
//       console.log(err);
//       return;
//     }
//     console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
//     console.log(info.response);
//   });
// };
// module.exports = sendEmail;
const nodemailer = require("nodemailer");
// let transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     type: "OAuth2",
//     user: process.env.EMAIL_USERNAME,
//     pass: process.env.EMAIL_PASSWORD,
//     clientId: process.env.OAUTH_CLIENTID,
//     clientSecret: process.env.OAUTH_CLIENT_SECRET,
//     refreshToken: process.env.OAUTH_REFRESH_TOKEN,
//   },
// });
// let mailOptions = {
//   from: "khodorhassoun26@gmail.com",
//   to: "khodorhassoun@outlook.com",
//   subject: "Nodemailer Project",
//   text: "Hi from your nodemailer project",
// };

// const sendEmail = () => {
//   transporter.sendMail(mailOptions, function (err, data) {
//     if (err) {
//       console.log("Error " + err);
//     } else {
//       console.log("Email sent successfully");
//     }
//   });
// };
// const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  tls: { rejectUnauthorized: false },
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const mailOptions = {
  from: process.env.EMAIL_USERNAME,
  to: "khodorhassoun26@gmail.com",
  subject: "Subject",
  text: "Email content",
};
const sendEmail = () => {
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      // do something useful
    }
  });
};
module.exports = sendEmail;
