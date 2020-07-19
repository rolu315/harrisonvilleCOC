const functions = require('firebase-functions');
const admin = require("firebase-admin")
const nodemailer = require('nodemailer');
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;


admin.initializeApp()


var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: gmailEmail,
        pass: gmailPassword
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

exports.bibleCourseEmail = functions.firestore
    .document('bibleCourses/{fullName}')
    .onCreate((snap, context) => {

        const mailOptions = {
            from: `harrisonvillecoc@gmail.com`,
            to: snap.data().email,
            subject: 'Bible Correspondence Email Feedback',
            html: `<h1>New Bible Correspondence Course </h1>
                    <p><b>Email: </b>${snap.data().email}<br></p>
                    <p><b>Full Name: </b>${snap.data().fullName}<br></p>
                    <p><b>Phone Number: </b>${snap.data().phoneNumber}<br></p>
                    <p><b>Comments: </b>${snap.data().comments}<br></p>
                    <p><b>Street Address: </b>${snap.data().streetAddress}<br></p>
                    <p><b>City: </b>${snap.data().city}<br></p>
                    <p><b>State: </b>${snap.data().state}<br></p>
                    <p><b>Zip: </b>${snap.data().zip}<br></p>
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

exports.bugReportingEmail = functions.firestore
    .document('formBugReporting/{errorDescription}')
    .onCreate((snap, context) => {

        const mailOptions = {
            from: `harrisonvillecoc@gmail.com`,
            to: snap.data().email,
            subject: 'Bug Reporting Feedback',
            html: `<h1>New Bug Reporting Feedback </h1>
                    <p><b>Email: </b>${snap.data().email}<br></p>
                    <p><b>Submitted By: </b>${snap.data().submittedBy}<br></p>
                    <p><b>Submitted Date: </b>${snap.data().submittedDate}<br></p>
                    <p><b>Browser: </b>${snap.data().browser}<br></p>
                    <p><b>Error Description: </b>${snap.data().errorDescription}<br></p>
                    <p><b>Error Message: </b>${snap.data().errorMessage}<br></p>
                    <p><b>Issue Description: </b>${snap.data().issueDescription}<br></p>
                    <p><b>Section Issue Found In: </b>${snap.data().occurrenceSection}<br></p>
                    <p><b>URL: </b>${snap.data().url}<br></p>
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