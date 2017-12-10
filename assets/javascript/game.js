// 
// Create a variable to store sytem generated random number between 19 - 120
// Create a variable to store value of each crystal between 1 - 12 
// 
// System selects a randon number and dispay in the screen

// VARIABLES
// ====================================================================================================================================
var randNum;
var crystalValue;


// Store the sytem generated random number between 19 - 120 to variable 
randNum = Math.floor((Math.random() * 100) + 19);
console.log("System generated Random Number is " + randNum);

// Store the sytem generated random number between 19 - 120 to variable 
crystalValue = Math.floor((Math.random() * 12) + 1);
console.log("Crystal value is " + crystalValue);

