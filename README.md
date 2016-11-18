# Client Report Example
A small example for logging frontend JavaScript exceptions

## Prerequisites

* NodeJS

## Running the code

Just `cd` to the project directory and run `node index.js`.
The server will launch and you can access the website by visiting `http://localhost:3000/static`

## Logs

Following JSON will be sent to the server on JavaScript errors:

```javascript
{
   "msg":"Uncaught ReferenceError: a is not defined",
   "fingerprint":"38602aaafc4c5682ee3ff45079482bcf",
   "trace":[
      {
         "functionName":"HTMLButtonElement.onclick",
         "fileName":"http://localhost:3000/static/",
         "lineNumber":11,
         "columnNumber":25,
         "source":"    at HTMLButtonElement.onclick (http://localhost:3000/static/:11:25)"
      }
   ],
   "platform":{
      "browser":"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36",
      "cookiesEnabled":true
   }
}
```