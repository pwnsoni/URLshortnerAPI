const serverless = require('serverless-http');
const express = require('express');

const bodyParser = require('body-parser');

const {shortenUrl, widenUrl} = require('./util');

require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api', (req, res) => {
    res.json({statusCode: 200, message:'Ok'})
})

app.post('/api/shorten', async (req, res) => {
    await shortenUrl(req, res);
})

app.get('/api/:shortenedUrl', async (req, res) => {
    await widenUrl(req, res);
})


module.exports.handler = serverless(app);