const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');
const exphbs = require('express-handlebars');



const app = express();

const route = require('./routes/routes')

// view engine setup
app.engine('handlebars', exphbs());
app.set('vewi engine', 'handlebars');


// connect to mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://alaeessaki:live.1457@aljisrwebapp-shard-00-00-lfjnm.mongodb.net:27017,aljisrwebapp-shard-00-01-lfjnm.mongodb.net:27017,aljisrwebapp-shard-00-02-lfjnm.mongodb.net:27017/Aljisr?ssl=true&replicaSet=aljisrWebApp-shard-0&authSource=admin&retryWrites=true&w=majority', {
        useNewUrlParser: true
    }).then(res => console.log("Connected to DB"))
    .catch(err => console.log(err));

// on connection
mongoose.connection.on('connected', () => {
    console.log('connected to database mongodb @27017')
})

mongoose.connection.on('error', (err) => {
    if (err) {
        console.log('Error in Database connection', err);
    }
});


// port no
const port = process.env.PORT || 3200;

// adding middleware - cors
app.use(cors());

// body parser
app.use(bodyparser.json());


app.use('/api', route);


// Allowed extensions list can be extended depending on your own needs
const allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
];


// static files
// app.use(express.static(path.join(__dirname, 'public')));





app.use('/', express.static(path.join(__dirname, 'public/')));
app.use('/admin', express.static(path.join(__dirname, 'public/admin')));



app.get('/admin/*', (req, res) => {
    if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
        res.sendFile(path.resolve(`public/admin/${req.url}`));
    } else {
        res.sendFile(path.resolve('public/admin/index.html'));
    }
});

// base route
app.get('/*', (req, res) => {
    if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
        res.sendFile(path.resolve(`./public/${req.url}`), );
    } else {
        res.sendFile(path.resolve('./public/index.html'));
    }
});


app.listen(port, () => {
    console.log('server started at port: http://localhost:' + port + '/');
    console.log('connecting to database ...');
});