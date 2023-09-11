#!/usr/bin/env node

/* 
- Write a script that prints 3 lines: (like 1-multi_languages.js) 
but by using an array of string and a loop

1. The first line: “C is fun”
2. The second line: “Python is cool”
3. The third line: “JavaScript is amazing”
4. You must use console.log(...) to print all output
5. You are not allowed to use var
6. You are not allowed to use any if/else statement
7. You can use only one console.log
8. You must use a loop (while, for, etc.)

*/

// Declare array with 3 items within
let multi_languages = ["C is fun", "Python is cool","JavaScript is amazing"];

// Initalize for loop to run for the total length of an array
for (let i = 0; i < multi_languages.length; i++){
    // Print each item to the console
    console.log(multi_languages[i]);
}


