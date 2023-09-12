#!/usr/bin/env node

/* 
-Write a function that increments and calls a function.

1. The function must be visible from outside
2. Prototype: function (number, theFunction)
3. You are not allowed to use var

*/

exports.addMeMaybe = function (number, theFunction) {
    number++;
    theFunction(number);
};