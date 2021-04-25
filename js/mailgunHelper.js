// get ENV keys
const { host_email, mailgun_domain, mailgun_key } = require('./../config');

//define mailgun instance
const Mailgun = require('mailgun-js')

// initiate mailgun instance
var mailgun = new Mailgun({apiKey: mailgun_key, domain: mailgun_domain});


/* define function to send mail
// input:
1. from email (string)
2. message (string)
output: console.log(result message from mailgun)
*/
const sendMail = async (from, message) => {

    // all mail goes to host_email
    const to = host_email
    // define the subject in the email
    const subject = 'You have a message from arturocreates.com'

    // data for mailgun object
    const data = {
        from: from,
        to: to,
        subject: subject,
        text: message
    }

    await mailgun.messages().send(data, (error, body) => {
        console.log('mailgun error', error)
        console.log('mailgun body', body)
        if(error){
            console.log(error)
            return error
        } else {
            console.log(body)
            return body
        }
    })
}


module.exports = {
    sendMail: sendMail
  };