const express = require('express');
const path = require('path');
const sendEmailController = require('./Controller/controller');

const app = express();

// Middleware to parse incoming request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Authentication middleware
const authenticateFields = (req, res, next) => {
  const { email, subject, content } = req.body;

  if (!email || !subject || !content) {          // checking the required fields are present
    return res.status(400).send('Missing required fields.');
  }
  next();
};

app.post('/send-email', authenticateFields, sendEmailController);  // route to send an email

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});




