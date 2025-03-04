const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express()
app.use(express.json());
app.use(cors());

require('dotenv').config()
const port = process.env.PORT || 5000

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))