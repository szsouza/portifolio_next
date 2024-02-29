'use server'
import nodemailer from 'nodemailer';

async function sendMessage(formData: FormData) {
 
    const rawFormData = {
      nome: formData.get('nome'),
      email: formData.get('email'),
      mensagem: formData.get('mensagem'),
    }
    try {
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          service: "Gmail",
          port: 465,
          secure: false,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
          }
        });
  
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.RECIPIENT_EMAIL,
          subject: 'contact',
          text: `Name: ${rawFormData.nome}\nEmail: ${rawFormData}\nMessage: ${rawFormData.mensagem}`
        });
        console.log(rawFormData)
  return
      } catch (error) {
        console.error(error);
       
      }    
  }

  export {sendMessage}



 

    
