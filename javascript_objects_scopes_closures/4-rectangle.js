#!/usr/bin/node
/* 
1. Write a class Rectangle that defines a rectangle:

- You must use the class notation for defining your class
- The constructor must take 2 arguments: w and h
- Initialize the instance attribute width with the value of w
- Initialize the instance attribute height with the value of h
- If w or h is equal to 0 or not a positive integer, create an empty object
- Create an instance method called print() that prints the rectangle using the character X
- Create an instance method called rotate() that exchanges the width and the height of the rectangle
- Create an instance method called double() that multiples the width and the height of the rectangle by 2
*/

// Rectangle class with width and height properties
module.exports = class Rectangle {
    // Constructor takes width and height parameters
    constructor(w,h) {
        // Check if width and height are positive
        if (w > 0 && h > 0) {
            // If so, assign them to the instance properties
            this.width = w;
            this.height = h;
        }
    }
    
    // Prints the rectangle to the console
    print() {
        // Loop through the rows
        for (let i = 0; i < this.height; i++) {
            // Create a row string
            let row = '';
            // Loop through the columns
            for (let j = 0; j < this.width; j++) {
                // Add an X to the row string
                row += 'X';
            }
            // Print the row
            console.log(row);
        }
    }
    rotate(){
        let temp = this.width;
        this.width=this.height;
        this.height=temp;
    }
    double(){
        this.width *= 2;
        this.height*=2;
    }
}