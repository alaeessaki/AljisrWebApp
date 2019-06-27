const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const nodemailer = require('nodemailer');
//const xoauth = require('xoauth2'); for gmail api creds install the xoauth2 module --npm--

const app = express();

// view engine 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//static pages
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('main');
});

app.post('/send', (req, res) => {
    const output = `
        <p>you have a new contact request</p>
        <h3>Details</h3>
        <ul>
            <li>Name : ${req.body.name}</li>
            <li>Email : ${req.body.email}</li>
            
        </ul>
        <h3>the message is : </h3>
            <p>${req.body.message}</p>
    `;
    //nodemailer trnsporter object !!
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        // auth: {
        //     xoauth: xoauth.createXOAuth2Generator({
        //         user: 'ashruum33@gmail.com',
        //         clientId: '529723358972-m9u303t31ll27akr5lfqbftmqhmcf9k2.apps.googleusercontent.com',        API experience
        //         clientSecret: 'VL0JeyxatIRWYQJRLazNsV2V',
        //         refreshToken: '1/yUFSfP4rrff9anh2pUTQSQJHWUIvrnKq_G7ie7UVsPE'
        //     })
        // }

        auth: {
            user: process.env.email,
            pass: process.env.password
        },
        tls: {
            rejectUnauthorized: false // i don't know what this do .... honestly
        }

    });
    var mailOption = {
        from: '------------K-admin-----------',
        to: req.body.email,
        subject: 'the news of today',
        text: 'The message of a lifetime', // i know it's not practical , but i am just testing the API ....
        html: output,

    }

    transporter.sendMail(mailOption, function (err, res) {
        if (err) {
            console.log('error');
        } else {
            console.log('message sent !');
            res.send('sent successfully !');
        }
    })
});


// aaaaand it doesn't work ..... i blame google apis for this !!!
// API way is totally not the way 
// where is the way ....

// message sent notification problem -------need to be fixed-----------


app.listen(3000, () => console.log('server started ...  http://localhost:3000'));