
const express = require('express');

const bodyParser = require('body-parser');

const {shortenUrl, widenUrl} = require('./util');

require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// let connectToDB = async () => {
//     const mongoose = require('mongoose');
//     mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
//     const db = mongoose.connection;
//     db.on('error', console.error.bind(console, 'connection error:'));
//     db.once('open', function() {
//     // we're connected!
//     });
// }

// app.get('/', (req, res) => {
//     res.json({statusCode: 200, message:'OK'})
// })

app.use('/', express.static('../ssr_testing/dist'))

app.post('/api/shorten', async (req, res) => {
    await shortenUrl(req, res);
})

app.get('/api/:shortenedUrl', async (req, res) => {
    await widenUrl(req, res);
})

app.listen(3000, () => {
    console.log('listening on 3000')
})
