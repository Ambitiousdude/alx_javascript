#!/usr/bin/node

/* 
1. Write a class Rectangle that defines a rectangle:

-- You must use the class notation for defining your class
- The constructor must take 2 arguments w and h
- Initialize the instance attribute width with the value of w
- Initialize the instance attribute height with the value of h
- If w or h is equal to 0 or not a positive integer, create an empty object
*/

// Rectangle class
module.exports = class Rectangle {
    // Constructor
    constructor(w, h) {
        // Check if width and height are positive
        if (w > 0 && h > 0) {
            // If so, assign them to the instance variables
            this.width = w;
            this.height = h;
        }
    }
}