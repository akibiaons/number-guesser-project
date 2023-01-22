let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
//Below is the code from the tutorial...
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};
console.log(generateTarget());

//Below is the compareGuesses function to see which was closer..
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = Math.abs(targetGuess - humanGuess);
    const computerDifference = Math.abs(targetGuess - computerGuess);
    if (humanDifference <= computerDifference) {
        return true;
    }
    else {
        return false;
    }
};
//Below we will have a function that updates the score based off of who the winner is...
const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    }
    else if (winner === 'computer') {
        computerScore++;
    }
};
// Write your code below:
//The first step for the number guesser game is to create a number generator to generate a random number between 1 - 9. This number will be the target number that 
//-the computer and player must guess closest to in order to win.
/*
const generateTarget = () => {
  return Math.random(Math.random()* 10);
};
*/
/* 
In the function titled generateTarget, we use Math.floor for a random number between 1 - 0 to be generated, then multiply thr number by 10 and math random..
This random number generator is called with a console.log statement to call upon a random number
*/
//================================================================================================================================================================================================
/* 
Below for step 2 of the JavaScript for the guessing game, we will now add a function that can determine which player will
win (computer or human) based off of the absolute value of their response to the target number...the function also must return 
the result of the round, win or lose based on the humans side.
*/
//========================================================================================
/*
const compareGuesses = (human, computer, target) => {
    let humanGuess = Math.abs(target - human);
    let computerGuess = Math.abs(target - computer);
    return humanGuess < computerGuess;
};
*/
/* Below is my original shot at the compareGuesses step...
    Math.abs(target - human);
    Math.abs(target - computer);

    if (Math.abs(target - human) < Math.abs(target - computer)) {
        return true;
    }
    else {
        return false;
    }
*/
/* ==================================================================================================================
In the code above we added a compareGuesses function with three paramaters...
The paramaters are the human, computer, and target numbers...We use Math.abs to 
take the difference between target and the human / computer guess then determine the 
winner by which one has the lowest absolute value, which would be the number closest to
the generateTarget function number result.....
*/
//================================================================================================================================================================================================
/*
Below I will be adding an updateScore function with a single parameter, which is a string
representing the winner. The score will be increased by 1 depending on the winner passed
into "update score" the string will be either "human" or "computer"...
=====================================================================================================*/
/*
const updateScore = (winner) => {
    if (winner = human) {
        return humanScore + 1;
    }
    else if (winner = computer) {
        return computerScore + 1;
    }
};
*/