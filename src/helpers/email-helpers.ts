
import { emailConfig } from '../config/app.config';
import { EmailTask } from '../modules/email-module/email.model';

const nodemailer = require('nodemailer');
export const sendEmail = async (emailTask : EmailTask) : Promise <boolean> => {
  try{
    const mailTransporter = nodemailer.createTransport(emailConfig);
    const mailDetails = {
        from: emailTask.from_email,
        to: emailTask.send_to,
        subject: emailTask.subject,
        html: `<div>${emailTask.body}</div>`
    };
    const infro = await mailTransporter.sendMail(mailDetails);
    return true;
  }
  catch (ex) {
    console.log(ex);
    return false;
  }
}