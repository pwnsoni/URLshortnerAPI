const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    origninalUrl : {
        type: String,
        required: true,
        unique: true
    },
    shortenedUrl : {
        type: String,
        required: true,
        unique: true
    },
    createdAt : Date
});

const Url = mongoose.model('Url', urlSchema);

module.exports = {Url}