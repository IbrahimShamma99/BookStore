const CollabEmail = {
    pass: 'amman!@#$1234' ,
    user:"collabresearchservice@gmail.com"
};


const VerifyemailBody = (email)=>{
    return (
    '<!DOCTYPE html>'+"<html>" + "<body>"+ "<p>Someone, perhaps you, has added this email address</p>"+
     `<a href="mailto:${email}">:${email}</a>`+ "<p>to their collab account.If you wish to proceed with this request, click this link to</p>"+
     `<a href="https://collabresearchserver.herokuapp.com/verify?email=${email}>verify your email address</a>`
     );
};

const PasswordRecoveryBody = (email)=>{
    return (
    '<!DOCTYPE html>'+"<html>" + "<body>"+ "<p>You requested password recovery on Collab research</p>"+
     `<a href="mailto:${email}">:${email}</a>`+
     `<a href="http://localhost:5000/forget?email=${email}>verify your email address</a>`
     );
};
const NotificationBody = (email,body)=>{
    //TODO
    return (
    '<!DOCTYPE html>'+"<html>" + "<body>"+ "<p>You requested password recovery on Collab research</p>"+
     `<a href="mailto:${email}">:${email}</a>`+
     `<a href="http://localhost:5000/forget?email=${email}>verify your email address</a>`
     );
};


module.exports = {
    CollabEmail,VerifyemailBody,
    NotificationBody,
    PasswordRecoveryBody};