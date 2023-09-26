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

javascript
// Define the function with error, response, and body parameters
const countFilmsWithCharacter = (error, response, body) => {
    if (error) {
        console.log(error); // Log the error if there is one
    } else {
        const data = JSON.parse(body); // Parse the body into a JSON object
        data.results.forEach((film) => { // Loop through each film in the results array
            film.characters.forEach((character) => { // Loop through each character in the film's characters array
                if (character.includes(id)) { // Check if the character's id is included in the character's id array
                    num++; // Increment the count if the condition is met
                }
            });
        });
        console.log(num); // Log the final count of films with the specified character
    }
}