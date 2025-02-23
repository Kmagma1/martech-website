const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const app = express()

app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your-email@gmail.com', // Replace with your email
    pass: 'your-email-password', // Replace with your email password
  },
})

app.post('/send', (req, res) => {
  const { name, email, message } = req.body

  const mailOptions = {
    from: email,
    to: 'kbempah360@gmail.com', // Your email
    subject: `New Message from ${name}`,
    text: message,
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString())
    }
    res.status(200).send('Message sent: ' + info.response)
  })
})

app.listen(5000, () => {
  console.log('Server is running on port 5000')
}) 