var nodemailer = require('nodemailer');

const EmailCreateSend = (Email,title,body) =>{
    const EmailInfo = {
      from: 'Collab',
      subject: title,
      to: Email, 
      html:body
    };
    
    var transporter = nodemailer.createTransport({
      service: 'gmail',
        auth: {
          pass: 'amman!@#$1234' ,
          user:"collabresearchservice@gmail.com",
        },
        requireTLS: true,
    });
    
    transporter.sendMail(EmailInfo, function(error, info){
      if (error) {
      console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }

module.exports = EmailCreateSend