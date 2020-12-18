const mongoose = require('mongoose');
require('dotenv').config();

const {Url} = require('./models/url');
const connUri = process.env.MONGO_DEV_CONN_URL;


let shortenUrl = async function(req, res){

    let originalUrl = req.body.url;
    console.log('shortening the url')


    mongoose.connect(connUri, { useNewUrlParser : true, useUnifiedTopology: true  },async (err) => {
        if (!err) {
            let result = {};
            let status = 201;
            let uniqueId = Date.parse(new Date().toDateString()) + Math.random() * 1000;
            console.log(uniqueId);
            let shortenedUrl = uniqueId.toString(36);

            let prevShortening = await Url.findOne({origninalUrl: originalUrl});
            console.log(prevShortening)
            if (!prevShortening){

                let url = new Url({
                    origninalUrl: originalUrl,
                    shortenedUrl: shortenedUrl,
                    createdAt: new Date()
                })
                console.log(url + 'LL')
    
                try{
                    let kl = await url.save();
                    result.status = status;
                    result.result = kl;
    
                } catch(err){
                    status = 500;
                    result.status = status;
                    result.error = err;
                    console.log(err)
                }
            } else {
                
                result.status = status;
                result.result = prevShortening;
                
            }

            res.status(status).send(result);

            // Close the connection after saving
          mongoose.connection.close();
        } else{
            status = 500;
            result.status = status;
            result.error = err;
            res.status(status).send(result);
    
            mongoose.connection.close();   
        }
    })
}


let widenUrl = async function(req, res){
    let result = {};
        let status = 201;
    console.log('widening the url');
    let shortenedUrl = req.params.shortenedUrl;
    mongoose.connect(connUri, { useNewUrlParser : true, useUnifiedTopology: true },async (err) => {
        if (!err){
            try{
                const url = await Url.find({shortenedUrl: shortenedUrl});
                result.status = status;
                result.error = err;
                result.result = url;
            } catch(e){
                result.status = 500;
                result.error = e;
            }
            res.status(status).send(result);
            mongoose.connection.close();
        } else{
            status = 500;
            result.status = status;
            result.error = err;
            res.status(status).send(result);

            mongoose.connection.close();
        }
    })

    console.log(shortenedUrl);
}

module.exports = {shortenUrl, widenUrl};