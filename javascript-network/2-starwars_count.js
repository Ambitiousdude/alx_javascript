#!/usr/bin/node

/*
1. Write a script that prints the number of movies where the character “Wedge Antilles” is present.

- The first argument is the API URL of the Star wars API: https://swapi-api.alx-tools.com/api/films/
- Wedge Antilles is character ID 18 - your script must use this ID for filtering the result of the API
- You must use the module request
*/

const request = require('request');

const url = process.argv[2];
const id = '18';
let num = 0;

request.get(url, (error, response, body) => {
    if (error) {
        console.log(error);
    } else {
        const data = JSON.parse(body);
        data.results.forEach((film) => {
            film.characters.forEach((character) => {
                if (character.includes(id)) {
                    num++;
                }
            });
        });
        console.log(num);
    }
});