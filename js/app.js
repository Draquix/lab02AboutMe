'use strict';

var userName = prompt("What is your name?");

//console.log("The user name entered was: " + userName + ".");
alert("Hello, " + userName + "!  Welcome to my page.");


var score = 0;

var questions = [
    "Did I attend college in my twenties?",
    "Do I have cats opposed to a dog?",
    "Do I have a son who is 15 years old?",
    "Is my favorite series of videogames the Madden NFL titles?",
    "Have I worked with any languages aside from the JavaScript used in this website?"
];
var answers = [true,false,true,false,true];

for (var i = 0; i < questions.length; i++) {
    console.log("Entering for loop")
    do {
        console.log("Entering do loop")
        var input = prompt(questions[i]);
    } while ( !(input.toUpperCase() === "Y" || input.toUpperCase() === "YES" || input.toUpperCase() === "N" || input.toUpperCase() === "NO") );

    if (answers[i] === true) {
        if (input.toUpperCase() === "Y" || input.toUpperCase() === "YES") {
            //console.log("Q: " + questions[i] + " - A: " + answers[i] + " -- User got it correct.  Score is: " + score);
            alert("Correct!");
            score ++;
        } else {
            alert("Wrong...");
            //console.log("Q: " + questions[i] + " - A: " + answers[i] + " -- User got it wrong.  Score is: " + score);
        }
    } else {
        if (input.toUpperCase() === "N" || input.toUpperCase() === "NO") {
             //console.log("Q: " + questions[i] + " - A: " + answers[i] + " -- User got it correct.  Score is: " + score);
             alert("Correct!");
             score ++;
        } else {
            alert("Wrong...");
            //console.log("Q: " + questions[i] + " - A: " + answers[i] + " -- User got it wrong.  Score is: " + score);
        }
    }
}
alert("You got " + score + " out of 5 questions correct.");
