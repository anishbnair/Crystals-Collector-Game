// 
// Create a variable to store sytem generated random number between 19 - 120
// System selects a randon number and dispay in the screen
// Create an array to store random value of each crystal between 1 - 12 
// Assign unique random value to each crystal 
// When user click on each cystal, the sum of each crystal value should be displayed as 'Your total Score' 
// D

// VARIABLES
// ====================================================================================================================================
var randNum;
//var crystalValue = [];
var redCrystal = 0;
var blueCrystal = 0;
var yellowCrystal = 0;
var greenCrystal = 0;
var score = 0;
var wins = 0;
var losses = 0;


// Store the sytem generated random number between 19 - 120 to variable 
randNum = Math.floor((Math.random() * 100) + 19);
console.log("System generated Random Number is " + randNum);

// Display random number on the screen
$(".guessNum").append(randNum);

// Assign random value to each crystal  
// redCrystal = Math.floor((Math.random() * 12) + 1);
// console.log("Red Crystal value is " + redCrystal);
// blueCrystal = Math.floor((Math.random() * 12) + 1);
// console.log("Blue Crystal value is " + blueCrystal);
// yellowCrystal = Math.floor((Math.random() * 12) + 1);
// console.log("Yellow Crystal value is " + yellowCrystal);
// greenCrystal = Math.floor((Math.random() * 12) + 1);
// console.log("Green Crystal value is " + greenCrystal);
// for (i = 0; i < 4; i++) {
//     crystalValue[i] = Math.floor((Math.random() * 12) + 1);
//     console.log(crystalValue[i]);
//     //console.log(crystalValue[i]);
// };
// redCrystal = crystalValue[0];
// console.log("Red Crystal value is " + redCrystal);
// blueCrystal = crystalValue[1];
// console.log("Blue Crystal value is " + blueCrystal);
// yellowCrystal = crystalValue[2];
// console.log("Yellow Crystal value is " + yellowCrystal);
// greenCrystal = crystalValue[3];
// console.log("Green Crystal value is " + greenCrystal);

// Function to generate random numbers between 1 to 12 and assign unique random value to each crystal 
function generateCrystalValue() {
    var max = 12;
    var crystalValue = [];
    for (var i = 0; i < max; i++) {
        var temp = Math.floor((Math.random() * max) + 1);
        if (crystalValue.indexOf(temp) == -1) {
            crystalValue.push(temp);
        }
        else
            i--;
    }
    console.log(crystalValue);
    redCrystal = crystalValue[0];
    console.log("Red Crystal value is " + redCrystal);
    blueCrystal = crystalValue[1];
    console.log("Blue Crystal value is " + blueCrystal);
    yellowCrystal = crystalValue[2];
    console.log("Yellow Crystal value is " + yellowCrystal);
    greenCrystal = crystalValue[3];
    console.log("Green Crystal value is " + greenCrystal);
};
generateCrystalValue();

function userScore () {
    $("#red").click (function () {
        score = score + redCrystal;
        console.log(score);
        $(".totalScore").text(score);
    });
    
    $("#blue").click (function () {
        score = score + blueCrystal;
        console.log(score);
        $(".totalScore").text(score);
    });
    
    $("#yellow").click (function () {
        score = score + yellowCrystal;
        console.log(score);
        $(".totalScore").text(score);
    });
    
    $("#green").click (function () {
        score = score + greenCrystal;
        console.log(score);
        $(".totalScore").text(score);
    }); 
};
userScore(); 

