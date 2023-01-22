let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//The first step for the number guesser game is to create a number generator to generate a random number between 1 - 9. This number will be the target number that 
//-the computer and player must guess closest to in order to win.
const generateTarget = () => {
  return Math.floor(Math.random()* 10);
};
console.log(generateTarget());
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
const compareGuesses = (human, computer, target) => {
    Math.abs(target - human);
    Math.abs(target - computer);

    if (Math.abs(target - human) < Math.abs(target - computer)) {
        return true;
    }
    else {
        return false;
    }
};
console.log(compareGuesses(2, 9, generateTarget()));
/*
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
*/
const updateScore = () => {

};