const functions = require('firebase-functions');
const admin = require("firebase-admin")
const nodemailer = require('nodemailer');

admin.initializeApp()


var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'harrisonvillecoc@gmail.com',
        pass: 'Riddle4700##'
    }
});


exports.contactUsEmail = functions.firestore
    .document('formContacts/{email}')
    .onCreate((snap, context) => {

        const mailOptions = {
            from: `harrisonvillecoc@gmail.com`,
            to: snap.data().email,
            subject: 'Contact Form Email Feedback',
            html: `<h1>New Contact Form Email Feedback</h1>
                    <p><b>Email: </b>${snap.data().email}<br></p>
                    <p><b>Full Name: </b>${snap.data().fullName}<br></p>
                    <p><b>Subject: </b>${snap.data().subject}<br></p>
                    <p><b>Message: </b>${snap.data().message}<br></p>
                    `
        };


        return transporter.sendMail(mailOptions, (error, data) => {
            if (error) {
                console.log(error)
                return
            }
            console.log("Sent!")
        });
    });