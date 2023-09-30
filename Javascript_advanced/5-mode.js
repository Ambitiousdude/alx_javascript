#!/usr/bin/node
/* 
1. Create a function named changeMode:

It accepts 5 arguments size (number), weight (string), transform (string), background (string), color (string)
Using closure, it changes the style of the entire page and set the font-size, font-weight, text-transform, background-color, and color

2. Write a function named main:

Set a variable named spooky that passes the arguments 9, bold, uppercase, pink, green to changeMode
Set a variable named darkMode that passes the arguments 12, bold, capitalize, black, white to changeMode
Set a variable named screamMode that passes the arguments 12, normal, lowercase, white, black to changeMode
Add a paragraph to the body of the page with the text Welcome Holberton!
Add a button to the body with the text Spooky
Add a button to the body with the text Dark mode
Add a button to the body with the text Scream mode
When clicking on each button, the page CSS should change to the different themes you created previously
Call the main function

3. Requirements:

Use vanilla javascript to add the elements to the DOM and change the style of the page
JQuery not allowed!
Clicking the Spooky button should change the web page to look something like this:

*/

function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {
    let spooky = changeMode(9, bold, uppercase, pink, green);
    let darkMode = changeMode(12, bold, capitalize, black, white);
    let screamMode = changeMode(12, normal, lowercase, white, black);

    const par = document.createElement('p');
    par.textContent = 'Welcome Holberton!';
    document.body.appendChild(par);

    const spookyB = document.createElement('button');
    spookyB.textContent = 'Spooky';
    spookyB.addEventListener('click', spooky);
    document.body.appendChild(spookyB);

    const dark = document.createElement('button');
    dark.textContent = 'Dark Mode';
    dark.addEventListener('click', darkMode);
    document.body.appendChild(dark);

    const scream = document.createElement('button');
    scream.textContent = 'Scream Mode';
    scream.addEventListener('click', screamMode);
    document.body.appendChild(scream);
}

main();