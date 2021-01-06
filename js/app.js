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
//random number generation from: w3schools.com/js/js_random.asp
var secretGuess = Math.floor(Math.random() * 10) + 1;
for (var i = 0; i < 4; i++) {
    var input = prompt("Guess a number between 1 and 10");
    console.log(i + 1 + " is the iteration.");
    //for strict comparison the string from the user input must be converted to a number.
    //outside instruction gained from: https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/
    var inputInt = parseInt(input, 10);
    console.log("iteration number " + (i+1));
    if (inputInt === secretGuess) {
        alert("Hooray! You guessed the secret number!");
        //console.log("Secret number has been successfully guessed.");
        score ++;
        break;
    } else if (inputInt < secretGuess) {
        alert("The number you guessed is lower than the secret number.");
        //console.log("The guess was lower than the secret number");
    } else if (inputInt > secretGuess) {
        alert("The number you guessed is higher than the secret number.");
        //console.log("The guess was higher than the secret number");
    } else {
        alert("There is an error, this message shouldn't be reached.");
        console.log("Error.");
    }
}
alert("The number you were trying to guess was: " + secretGuess);

var favoriteMovies = ["Forest Gump","Star Wars","Being John Malkovich","The Fifth Element","Lord of the Rings"];
for (var i = 0; i < 6; i++) {
    //console.log("movie guessing iteration number: " + (i + 1));
    var guess = prompt("What do you think one of my favorite movies are? There are multiple correct answers.");
    for (var x = 0; x < favoriteMovies.length; x++) {
        if (guess.toUpperCase() === favoriteMovies[x].toUpperCase()) {
            alert("You are correct, I love "+ guess + "!");
            score ++;
            var allDone = true;
            break;
        }
    }
    if (allDone === true){
        break;
    }
    alert("Nope, that's not on my list...");
}
var movieList = "Some of my favorite movies are: ";
for (var i = 0; i < favoriteMovies.length; i++) {
    movieList += favoriteMovies[i] + ",";
}
alert(movieList);
alert("You got " + score + " out of 7 questions correct.");
