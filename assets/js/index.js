// List all DOM variables //
const compChoiceDisplay = document.getElementById("comp-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("img");
const computerScore = document.getElementById("comp-score");
const playerScore = document.getElementById("player-score");
const tiedGame = document.getElementById("tied-game");
const button = document.getElementById("reset");

// Variables for player selection, computer section and result //
let playerChoice;
let compChoice;
let result;

// Variables to hold scores //
let humanScore = "0";
let botScore = "0";
let tieScore ="0";

// Add event listener to buttons //
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  playerChoice = e.target.id;
  playerChoiceDisplay.innerHTML = playerChoice;
  generateCompChoice();
  getResult();
  }));
  
// Function to generate the computers choice using random number //
function generateCompChoice() {
  const computerOption = Math.floor(Math.random() * 5);
  
  if (computerOption === 0) {
    compChoice = "Rock";
  }
  if (computerOption === 1) {
    compChoice = "Scissors";
  }
  if (computerOption === 2) {
    compChoice = "Paper";
  }
  if (computerOption === 3) {
    compChoice = "Lizard";
  }
  if (computerOption === 4) {
    compChoice = "Spock";
  }
  compChoiceDisplay.innerHTML = compChoice;
}

// Gets the result by comparing all possible outcomes //
function getResult() {

  let won = "You win!";
  let lost = "You lose!";
  let tie = "It's a tie!";

  if (compChoice === playerChoice) {
    result = tie;

  } else if (compChoice === "Rock" && playerChoice === "Paper") {
    result = won;
     
  } else if (compChoice === "Rock" && playerChoice === "Spock") {
    result = won;
     
  } else if (compChoice === "Paper" && playerChoice === "Scissors") {
    result = won;
     
  } else if (compChoice === "Paper" && playerChoice === "Lizard") {
    result = won;
     
  } else if (compChoice === "Scissors" && playerChoice === "Rock") {
    result = won;
     
  } else if (compChoice === "Scissors" && playerChoice === "Spock") {
    result = won;
     
  } else if (compChoice === "Lizard" && playerChoice === "Rock") {
    result = won;
     
  } else if (compChoice === "Lizard" && playerChoice === "Scissors") {
    result = won;

  } else if (compChoice === "Spock" && playerChoice === "Paper") {
    result = won;

  } else if (compChoice === "Spock" && playerChoice === "Lizard") {
    result = won;
  } else {
    result = lost;
  }

  // Writes result to HTML //
  resultDisplay.innerHTML = result;

    // Increments the score depending on outcome //
  if (result === won) {
    humanScore++;
  } else if (result === tie) {
    tieScore++;
  } else {
    botScore++;
  }
  
  // Writes scores to HTML elements //
  playerScore.innerHTML = humanScore;
  computerScore.innerHTML = botScore;
  tiedGame.innerHTML = tieScore;

  if (humanScore === 10) {
    resultDisplay.innerHTML = "GAME OVER!! Congratulations you've won the game, press the reset button to start again";
  } else if (botScore === 10) {
    resultDisplay.innerHTML = "GAME OVER!! Bad luck, you didn't win this time, press the reset button to try again";
  }
}

function restartGame() {
humanScore = 0;
botScore = 0;
tieScore = 0;
playerScore.innerHTML = humanScore;
computerScore.innerHTML = botScore;
tiedGame.innerHTML = tieScore;
resultDisplay.innerHTML = "";
playerChoiceDisplay.innerHTML = "";
compChoiceDisplay.innerHTML = "";
}
