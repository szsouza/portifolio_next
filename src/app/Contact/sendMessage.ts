"use server";
import nodemailer from "nodemailer";

async function sendMessage(formData: FormData) {
  const rawFormData = {
    nome: formData.get("nome"),
    email: formData.get("email"),
    mensagem: formData.get("mensagem"),
  };
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT || "587"),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: "contact",
      text: `Name: ${rawFormData.nome}\nEmail: ${rawFormData.email}\nMessage: ${rawFormData.mensagem}`,
    });
    console.log(rawFormData);
    return { success: true, msg: "Mensagem enviada!" };
  } catch (error) {
    console.error(error);
    return { success: false, msg: "Erro interno!" };
  }
}

export { sendMessage };
