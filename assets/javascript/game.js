// Pseudo code
// Create a variable to store sytem generated random number between 19 - 120
// System selects a randon number and dispay in the screen
// Create an array to store random value of each crystal between 1 - 12 
// Assign unique random value to each crystal 
// When user click on each cystal, dispay 'Your total Score' as the sum of each crystal value
// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.
// The game restarts whenever the player wins or loses.

// VARIABLES
// ====================================================================================================================================
var randNum = 0;
var totalScore = 0;
var wins = 0;
var losses = 0;
var crystals = ['assets/images/red.png', 'assets/images/blue.png', 'assets/images/yellow.png', 'assets/images/green.png'];

// FUNCTIONS  
// ===================================================================================================================================
// Function to create random numbers
function getRandNumber(max, min) {
    return Math.floor((Math.random() * (max - min + 1) + min));
}

// Function to generate random numbers between 1 to 12 and assign unique random value to each crystal 
function generateCrystals() {
    var crystalValue = [];
    for (var i = 0; i < 4; i++) {
        var temp = getRandNumber(1, 12);
        if (crystalValue.indexOf(temp) == -1) {
            crystalValue.push(temp);
        }
        else
            i--;
    }
    console.log("Random numbers for crystal values are " + crystalValue);
    // Loop to assign each 
    for (i = 0; i < crystalValue.length; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.attr("value", crystalValue[i]);
        imageCrystal.attr("src", crystals[i]);
        //imageCrystal.attr("alt", "crystals");
        imageCrystal.addClass("crystalImage")
        $(".crystalImages").append(imageCrystal);
    }
}

function restartGame() {
    $(".crystalImages").empty();
    crystalGame();
}

function crystalGame() {
    totalScore = 0;
    $("#displayScore").text(totalScore);
    randNum = getRandNumber(19, 120);
    // console.log("Random Number is " + randNum);
    $("#numberToGuess").text(randNum);
    generateCrystals();

    $(".crystalImage").on("click", function () {
        totalScore = totalScore + parseInt($(this).attr("value"));
        // console.log("Total score is " + totalScore);
        $("#displayScore").text(totalScore);
        if (totalScore === randNum) {
            wins++;
            $("#displayWins").text(wins);
            restartGame();
        } else if (totalScore > randNum) {
            losses++;
            $("#displayLosses").text(losses);
            restartGame();
        }
    })
}

// ==================================================================================================================================
$(document).ready(function () {
    crystalGame();
})
// ==================================================================================================================================



