# URLshortner
A simple url shortner Api

## Deployed on AWS lambda using serverless framework
Single command deployment 

URL:  https://82y5ite0i3.execute-api.us-east-1.amazonaws.com/prod/api
Expected Output : {"statusCode":200,"message":"Ok"}

URL: https://82y5ite0i3.execute-api.us-east-1.amazonaws.com/prod/api/shorten
Method : post
Body: {url: wwww.url.com}


URL: https://82y5ite0i3.execute-api.us-east-1.amazonaws.com/prod/api/<shortUrlReturned>
Method : get
Example : https://82y5ite0i3.execute-api.us-east-1.amazonaws.com/prod/api/kiz81sdv.2zl



