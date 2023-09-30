#!/usr/bin/node
/*
1. Create a function named welcome:

- It takes two arguments: firstName (string) and lastName (string)
- It contains a variable named fullName, that will contains the firstName followed by a space and then the lastName
- Within the welcome function, write a function named displayFullName:
- It should display an alert with the message Welcome followed by a space, then the variable fullName followed by an exclamation mark.
- Call the function displayFullName at the end of the function welcome

2. How to test

- Open your web inspector in the tab “Console”
Copy paste your code in the console and hit enter
Copy and paste this welcome('Holberton', 'School'); and hhit enter to run that code. It should prompt an alert with this content: Welcome Holberton School!
When you write and execute alert(fullName) afterwards, it should return a reference error fullName is not defined

*/

// Function to welcome a user by name
function welcome(firstName, lastName) {

    // Create a variable to store the full name
    let fullName = firstName + ' ' + lastName;

    // Create a function to display the full name
    function displayFullName () {
        // Alert the full name
        alert('Welcome ' + fullName + '!');
    }

    // Call the displayFullName function
    displayFullName();
}