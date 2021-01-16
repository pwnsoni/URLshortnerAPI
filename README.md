# URLshortner
A simple url shortner Api

## Deployed on AWS lambda using serverless framework
Single command deployment 

## Path

URL:  https://82y5ite0i3.execute-api.us-east-1.amazonaws.com/prod/api

Expected Output : {"statusCode":200,"message":"Ok"}

----------------------------------------------------------------------------------------------------

URL: https://82y5ite0i3.execute-api.us-east-1.amazonaws.com/prod/api/shorten

Method : post

Body: {url: www.url.com}

Expected Output: {
    "status": 201,
    "result": {
        "_id": "5fe16af639a3660008cfee3c",
        "origninalUrl": "www.url.com",
        "shortenedUrl": "kiz81sdv.2zl",
        "createdAt": "2020-12-22T03:41:42.983Z",
        "__v": 0
    }
}

----------------------------------------------------------------------------------------------------

URL: https://82y5ite0i3.execute-api.us-east-1.amazonaws.com/prod/api/<shortUrlReturned>

Method : get

Expected Output :{
    status: 201,
    error: null,
    result: [{
        _id: "5fe16af639a3660008cfee3c",
        origninalUrl: "www.url.com",
        shortenedUrl: "kiz81sdv.2zl",
        createdAt: "2020-12-22T03:41:42.983Z",
        __v: 0
        }]
    }

Example : https://82y5ite0i3.execute-api.us-east-1.amazonaws.com/prod/api/kiz81sdv.2zl



