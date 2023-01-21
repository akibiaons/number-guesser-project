let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//The first step for the number guesser game is to create a number generator to generate a random number between 1 - 9. This number will be the target number that 
//-the computer and player must guess closest to in order to win.
const generateTarget = () => {
  return Math.floor(Math.random()*10);
};
// Tested and works!! ==== console.log(generateTarget());
/* 
In the function titled generateTarget, we use Math.floor for a random number between 1 - 0 to be generated, then multiply thr number by 10 and math random..
This random number generator is called with a console.log statement to call upon a random number
*/