#!/usr/bin/node

/* 
1. Write a module named studentHogwarts:

It contains two variables privateScore set to 0, and name set to null
It contains one private method changeScoreBy, it takes points in argument and add it to privateScore

The module gives access to four public methods (return an object):
setName, it takes into argument newName, and set the private variable name
rewardStudent, it calls the method changeScoreBy with 1
penalizeStudent, it calls the method changeScoreBy with -1
getScore, it returns name: score (ex: Harry: 14)
Create one variable named harry, that is an instance of studentHogwarts:

Set the name of the object to Harry
Reward the student four times
Log to the console the name and score
Create one variable named draco, that is an instance of studentHogwarts:

Sets the name of the object to Draco
Reward the student one time
Penalize the student three times
Log to the console the name and score

Requirements:

Executing the code should display in the console
Harry: 4
Draco: -2
*/

function studentHogwarts() {
    let privateScore = 0;
    let name = null;

    //private method
    function changeScoreBy(points) {
        privateScore += points;
    }

    // public methods
    return {
       setName: function (newName) {
           name = newName;
       },
        rewardStudent: function () {
            changeScoreBy(1);
        },
        penalizeStudent: function () {
           changeScoreBy(-1);
        },
        getScore: function () {
           return `${name}: ${privateScore}` ;
        }
    };
}
// Harry,instance of Hogwarts
const harry = studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.getScore();
// Log the name and score for Harry
console.log(harry.getScore());

// Draco
const draco = studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.getScore();

// Log the name and score for Draco
console.log(draco.getScore());