const express = require('express');  
const nodemailer = require('nodemailer');  
const cors = require('cors');  
const dotenv = require('dotenv');  

dotenv.config(); // لتحميل المتغيرات البيئية  

// app.use(express.static(path.join(__dirname, '../frontend/build')));  

const app = express();  
const port = process.env.PORT || 5000;  

app.use(cors());  
app.use(express.json());  

// إعداد النقل عبر البريد الإلكتروني باستخدام nodemailer  
const transporter = nodemailer.createTransport({  
    service: 'gmail',  
    auth: {  
        user: process.env.EMAIL_USER,  
        pass: process.env.EMAIL_PASS,  
    },  
});  

// إعداد نقطة النهاية لإرسال الرسائل  
// app.post('/send-email', async (req, res) => {  
app.post('/api/send-email', async (req, res) => {  
    const { subject, message, recipients, senderName, senderEmail, replyToName, replyToEmail } = req.body;  

    // التحقق من صحة بيانات الإدخال  
    if (!subject || !message || !recipients || !Array.isArray(recipients) || recipients.length === 0) {  
        return res.status(400).json({ message: 'Please provide subject, message, and at least one recipient.' });  
    }  

    const mailOptions = {  
        from: senderEmail,  
        to: recipients.join(','), // قائمة المستلمين  
        subject: subject,  
        text: `SENDER_EMAIL: ${senderEmail}\nSENDER_NAME: ${senderName}\nREPLY_TO_EMAIL: ${replyToEmail}\nREPLY_TO_NAME: ${replyToName}\nMESSAGE: ${message}`,  
    };  

    try {  
        // إرسال البريد الإلكتروني  
        await transporter.sendMail(mailOptions);  
        res.status(200).json({ message: 'Email sent successfully!' });  
    } catch (error) {  
        console.error("Error sending email:", error); // طباعة الخطأ في الخادم  
        res.status(500).json({ message: 'Error sending email', error: error.message });  
    }  
});  

// بدء الخادم  
app.listen(port, () => {  
    console.log(`Server running on port ${port}`);  
});  
