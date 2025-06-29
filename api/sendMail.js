// api/sendEmail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Tous les champs sont requis." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "fertikh.marewane@gmail.com",
      pass: "TON_MOT_DE_PASSE_APPLICATION" // <= Mets ton vrai mot de passe app ici
    }
  });

  try {
    await transporter.sendMail({
      from: '"Portfolio Contact" <fertikh.marewane@gmail.com>',
      to: "fertikh.marewane@gmail.com",
      subject: `Nouveau message de ${name}`,
      text: `De: ${email}\n\n${message}`
    });

    res.status(200).json({ message: "Message envoyé avec succès." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de l'envoi." });
  }
}
