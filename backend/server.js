require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Inquiry = require('./models/Inquiry');

const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5001;

// Nodemailer Transporter Configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Middleware
const allowedOrigins = [
    'http://localhost:5173',
    process.env.FRONTEND_URL, // Will be set in production
];

app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true
}));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio_db')
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.post('/api/hire', async (req, res) => {
    try {
        const { name, email, phone, projectType, message } = req.body;

        // Basic validation
        if (!name || !email || !phone || !projectType || !message) {
            return res.status(400).json({ success: false, message: 'All fields are required.' });
        }

        const newInquiry = new Inquiry({
            name,
            email,
            phone,
            projectType,
            message,
        });

        await newInquiry.save();

        // Send Email Notification
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Sending to yourself
            subject: `New Portfolio Inquiry from ${name}`,
            html: `
                <h3>New Inquiry Details</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Project Type:</strong> ${projectType}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        };

        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            await transporter.sendMail(mailOptions);
        }

        res.status(201).json({ success: true, message: 'Inquiry submitted successfully and email sent.' });
    } catch (error) {
        console.error('Error submitting inquiry:', error);
        res.status(500).json({ success: false, message: 'Server Error. Please try again later.' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
