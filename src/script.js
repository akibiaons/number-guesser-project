let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//The first step for the number guesser game is to create a number generator to generate a random number between 1 - 9. This number will be the target number that 
//-the computer and player must guess closest to in order to win.
const generateTarget = () => {
  return Math.floor(Math.random()*10);
};