'use strict';

var userName = prompt("What is your name?");

//console.log("The user name entered was: " + userName + ".");
alert("Hello, " + userName + "!  Welcome to my page.");

function takeTheQuiz(){
    var score = 0;
    var answerOne = prompt("Did I attend college in my twenties?");
    answerOne =answerOne.toUpperCase();
    if (answerOne === 'Y' || answerOne === 'YES') {
        alert("Correct!");
        //console.log("Correct");
        score ++;
    } else {
        alert("No, I actually did get my associate's degree at Kirkwood Community College in Early Childhood Education...");
        //console.log("Wrong.");
    }
    var answerTwo = prompt("Do I have cats opposed to a dog?");
    answerTwo = answerTwo.toUpperCase();
    if (answerTwo === 'N' || answerTwo === 'NO') {
        alert("Correct!");
        //console.log("Correct");
        score ++;
    } else {
        alert("No, I did have two cats at one time, but I currently have a dog named, Honey.");
        //console.log("Wrong.");
    }
    var answerThree = prompt("Do I have a son who is 15 years old?");
    answerThree = answerThree.toUpperCase();
    if (answerThree === 'Y' || answerThree === 'YES') {
        alert("Correct!");
        //console.log("Correct.");
        score++;
    } else {
        alert("No, I do have a son named Connor who turned 15 in December of 2020...");
        //console.log("Wrong.");
    }
    var answerFour = prompt("Is my favorite series of videogames the Madden NFL titles?");
    answerFour = answerFour.toUpperCase();
    if (answerFour === 'N' || answerFour === 'NO') {
        alert("Correct!");
        //console.log("Correct.");
        score++;
    } else {
        alert("No, I don't really enjoy sports games, but I do like to play MMORPG's for the social aspect as well as the mechanics of being able to train the character to overcome tougher and tougher obstacles.");
        //console.log("Wrong.");
    }
    var answerFive = prompt("Have I worked with any languages aside from the JavaScript used in this website?");
    answerFive = answerFive.toUpperCase();
    if (answerFive === 'Y' || answerFive === 'YES') {
        alert("Correct!");
        //console.log("Correct.");
        score++;
    } else {
        alert("No, I've also learned a bit of Python on the side, and my first experiences with coding were on a TRS-80 writing in BASIC when I was 11.");
        //console.log("Wrong.");
    }
    alert("You got " + score + " out of 5 questions correct.");
}