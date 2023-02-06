var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "myemail",
        pass: "mypass"
    }
});

var mailOptions = {
    from: "myemail",
    to: "myfriendemail",
    subject: 'Sending Email using Node.js',
    text: 'That was easy! to create a nodemailer'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

