#!/usr/bin/env node

/* 
-Write a function that executes x times a function.

1. The function must be visible from outside
2. Prototype: function (x, theFunction)
3. You are not allowed to use var
*/

exports.callMeMoby = function (x, theFunction) {
    for (let i = 0; i < x; i++) {
        theFunction();
    }
};