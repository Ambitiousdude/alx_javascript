#!/usr/bin/node
/* 
1. Write a function named welcomeMessage:

- It accepts one argument fullName (string)
- It should be a closure for an alert displaying Welcome <fullName>

2. After this function definition, create three variables:

- guillaume contains a call welcomeMessage with Guillaume as argument
- alex contains a call welcomeMessage with Alex as argument
- fred contains a call welcomeMessage with Fred as argument

3. How to test:
- In your web console, cop/paste your file
- Executing the following in the console:
guillaume();
alex();
fred();

*/


function welcomeMessage(fullName) {
    alert('Welcome' + " " + fullName);
}

let guillaume = welcomeMessage('Guillaume');
let alex = welcomeMessage('Alex');
let fred = welcomeMessage('Fred');