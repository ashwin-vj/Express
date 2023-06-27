const nodemailer = require('nodemailer');

const sendEmailController = (req, res) => {
  const { email, subject, content } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ashwinvijay108@gmail.com',     
      pass: 'gngabdkgbefgyver'     
    }
  });

  const mailOptions = {
    from: 'ashwinvijay108@gmail.com',    
    to: email,
    subject: subject,
    text: content
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('An error occurred while sending the email.');
    } else {
      console.log('Email sent:', info.response);
      res.send('Email sent successfully!');
    }
  });
};

module.exports = sendEmailController;










