#!/usr/bin/node
/* 
1. Write a script that display the status code of a GET request.

- The first argument is the URL to request (GET)
- The status code must be printed like this: code: <status code>
- You must use the module request (NB: It must be installed if you haven’t already installed it)
*/

// import request module
const request = require('request')

// check if the url is the first commandline arg
if (process.argv.length < 3) {
    console.error('Input url');
    process.exit(1);
}

// get the url from commandline arg
const url = process.argv[2];

request.get(url)
        .on('response', response => {
            console.log(`code: ${response.statusCode}`);
});