const express = require('express');
// const sgMail = require('@sendgrid/mail');
const nodemailer = require('nodemailer');
const path = require('path');

const validateMessageInput = require('./validation/message');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client', 'build')));

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
// }

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.post('/sendMessage', (req, res) => {
    const { errors, isValid } = validateMessageInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const transporter = nodemailer.createTransport({
        host: 'smtp-relay.sendinblue.com',
        port: 587,

        auth: {
            user: 'nomsouzoanya@yahoo.co.uk',
            pass: 'wsLqyTESQxtp5v0M'
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    const messageContent = `
        <h3>New Message<h3><hr>
        <h5>From: ${req.body.name}</h5>
        <p>${req.body.message}</p>
    `;
    const msg = {
        to: 'nomsouzoanya@yahoo.co.uk',
        from: req.body.email,
        subject: req.body.subject,
        // text: 'and easy to do anywhere, even with Node.js',
        html: messageContent
    };
    // sgMail.send(msg)
    //     .then(() => {
    //         console.log('Message Sent...');
    //         return res.status(200).json({ msg: 'Message sent. You will be contacted shortly.' });
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         return res.status(500).json(err);
    //     });

    transporter.sendMail(msg, (err) => {
        if (err) {
            console.log(err);
            return res.status(500).json(err);
        } else {
            console.log('Message Sent ...');
            return res.status(200).json({ msg: 'Message sent. You will be contacted shortly.' });
        }
    });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}...`));