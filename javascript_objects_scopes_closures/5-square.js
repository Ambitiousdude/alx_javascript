#!/usr/bin/node
/* 
1. Write a class Square that defines a square and inherits from Rectangle of 4-rectangle.js:
- You must use the class notation for defining your class and extends
- The constructor must take 1 argument: size
- The constructor of Rectangle must be called (by using super())
*/

// A square is a rectangle with equal sides.
module.exports = class Square extends require('./4-rectangle.js') {
    // Constructor for a square.
    constructor(size) {
        // Call the constructor of the superclass with the same size for both width and height.
        super(w, h, size);
        this.size = size;
    }
}