import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import multer from 'multer';
import cors from 'cors';

dotenv.config();

const upload = multer();
const app = express();
app.use(cors({
    origin: 'https://sparkup-project.vercel.app'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
})

app.post('/send-email', upload.array('fileAttachment', 5), async (req, res) => {
    const formData = req.body;
    try {
        const info = await transporter.sendMail({
            from: `"${formData.fullName}" <${formData.email}>`,
            to: process.env.EMAIL_USER,
            subject: `New Service Request`,
            text: `Full Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phoneNumber}\nServices: ${formData.services}\nService Details: ${formData.serviceDetails}`,
            attachments: req.files
                ? req.files.map(file => ({
                        filename: file.originalname,
                        content: file.buffer
                }))
                : []
        });
        res.status(200).json({ message: 'Email sent successfully', info });
    } catch (error) {
        res.status(500).json({ message: 'Failed to send email', error });
    }
})


export default app;