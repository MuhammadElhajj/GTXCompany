    // استيراد الحزم
    const express = require('express');
    const nodemailer = require('nodemailer');
    const cors = require('cors');
    const dotenv = require('dotenv');

    dotenv.config();  // لتحميل المتغيرات البيئية

    const app = express();
//  const port = process.env.PORT || 5000;
 const port = process.env.PORT ;

    app.use(cors());
    app.use(express.json());

    // إعداد النقل عبر البريد الإلكتروني باستخدام nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,  // بريدك الإلكتروني
        pass: process.env.EMAIL_PASS   // كلمة المرور
      }
    });

    // إعداد نقطة النهاية لإرسال الرسائل
    app.post('/send-email', async (req, res) => {
      const { subject, message, recipients, senderName, senderEmail, replyToName, replyToEmail } = req.body;

      const mailOptions = {
        from: senderEmail,
        to: recipients.join(','),  // قائمة المستلمين
        subject: subject,
        text:  "SENDER_EMAIL : " + senderEmail +  "\nSENDER_NAME : " + senderName +  "\nREPLY_TO_EMAIL : " +  replyToEmail  +  "\nREPLY_TO_Name : " + replyToName  + "\nMESSAGE : " + message ,
        
      };

      try {
        // إرسال البريد الإلكتروني
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
        console.log("Hello")
        
      } catch (error) {
        res.status(500).json({ message: 'Error sending email', error: error.message });
        console.log("hi")
        
      }
    });

    // بدء الخادم
    
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
    
