#!/usr/bin/env node

/* 
-Update this script by adding a new function incr that increments the integer value.

1. You are not allowed to use var
*/

const myObject = {
    type: 'object',
    value: 12
};
console.log(myObject);
/*
YOUR CODE HERE
*/
myObject.incr = function () {
    this.value++;
};

myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);