#!/sur/bin/node

/* 
1. Write a script that prints all characters of a Star Wars movie:

- The first argument is the Movie ID - example: 3 = “Return of the Jedi”
- Display one character name by line
- You must use the Star wars API
- You must use the module request
*/

const request = require('request');

const movieId = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/';

request(url + movieId, (error, response, body) => {
    if (error) {
        console.log(error);
        return;
    }
    const movies = JSON.parse(body);

    for (const movie of movies.characters) {
        request.get(movie, (error, response, body1) => {
            if (error) {
                console.log(error);
            }
            const movieData = JSON.parse(body1);
            console.log(movieData.name);
        });
    }
});