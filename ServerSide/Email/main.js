var nodemailer = require('nodemailer');
const {VerifyemailBody,emailBody} = require("./constants");
const EmailCreateSend = require("./Base");

const EmailVerifyService = (userEmail) => {
  EmailCreateSend(userEmail,"EmailVerifyService",VerifyemailBody(userEmail))
};

const PasswordForgetService = (userEmail)=>{
  EmailCreateSend(userEmail,);
};

const NotificationService = (Emails,notication)=>{
  const EmailInfo = null;
  Emails.map(
    userEmail=>{

  EmailInfo = {
    from: 'Collab',
    subject: 'Password recovery',
    to: userEmail, 
    html:emailBody(userEmail)
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
  })
};

module.exports = {EmailVerifyService,PasswordForgetService};