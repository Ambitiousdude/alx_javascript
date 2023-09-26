#!/usr/bin/node
/* 
1. Write a script that prints the title of a Star Wars movie where the episode number matches a given integer.

- The first argument is the movie ID
- You must use the Star wars API with the endpoint https://swapi-api.alx-tools.com/api/films/:id
- You must use the module request
*/

const request = require('request');

const id = process.argv[2];
const starWars = `https://swapi-api.alx-tools.com/api/films/${process.argv[2]}`;

request(starWars, (error, response, body) => {
    if (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
    if (response.statusCode !== 200) {
        console.error(`HTTP Error: ${response.statusCode}`);
        process.exit(1);
    }

    const data = JSON.parse(body);

    console.log(`${data.title}`);
});