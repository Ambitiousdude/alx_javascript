#!/usr/bin/node
/* 
Create a function divideBy:

It takes into argument firstNumber (number)
It returns a function that takes into argument secondNumber (number)
It returns the second number divided by the first number
Create a function addBy:

It takes into argument firstNumber (number)
It returns a function that takes into argument secondNumber (number)
It returns the sum of the two numbers
Create four closures:

addBy100, that uses the function addBy with the number 100
addBy1000, that uses the function addBy with the number 1000
divideBy10, that uses the function divideBy with the number 10
divideBy100, that uses the function divideBy with the number 100
Requirements:

Executing the following code:

console.log(addBy100(20));
console.log(divideBy10(20));
console.log(divideBy100(200));
console.log(addBy1000(20));
Should display in the console:

120
2
2
1020

*/

function divideBy (firstNumber) {
  return function (secondNumber) {
    return secondNumber / firstNumber;
  };
}
function addBy (firstNumber) {
  return function (secondNumber) {
    return secondNumber + firstNumber;
  };
}
const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);
