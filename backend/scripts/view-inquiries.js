const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/portfolio_db')
    .then(async () => {
        const Inquiry = mongoose.model('Inquiry', new mongoose.Schema({
            name: String,
            email: String,
            projectType: String,
            message: String,
            createdAt: { type: Date, default: Date.now }
        }));

        const inquiries = await Inquiry.find().sort({ createdAt: -1 });

        console.log('\n=== YOUR INQUIRIES ===\n');
        if (inquiries.length === 0) {
            console.log("No inquiries found yet.");
        } else {
            inquiries.forEach((inq, i) => {
                console.log(`[${i + 1}] From: ${inq.name} <${inq.email}>`);
                console.log(`    Project: ${inq.projectType}`);
                console.log(`    Message: ${inq.message}`);
                console.log(`    Date: ${inq.createdAt.toLocaleString()}\n`);
            });
        }
        process.exit(0);
    })
    .catch(err => {
        console.error('Connection error:', err);
        process.exit(1);
    });
