#!/usr/bin/node

/* 
1. Write a script that gets the contents of a webpage and stores it in a file.

- The first argument is the URL to request
- The second argument the file path to store the body response
- The file must be UTF-8 encoded
- You must use the module request
*/

const request = require('request');

const url = process.argv[2];
const path = process.argv[3];
const fs = require('fs');

request(url, (error, response, body) => {
    if (error) {
        console.log(error);
    } else {
        fs.writeFile(path, body, 'utf8', (error) => {
            if (error) {
                console.log(error);
            }
        });
    }
});