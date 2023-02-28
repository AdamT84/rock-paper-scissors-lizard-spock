// List all DOM variables 
const compChoiceDisplay = document.getElementById("comp-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("img");
const computerScore = document.getElementById("comp-score");
const playerScore = document.getElementById("player-score");
const tiedGame = document.getElementById("tied-game");
const button = document.getElementById("reset");

// Variables for player selection, computer section and result
let playerChoice;
let compChoice;
let result;

// Variables to hold scores
let humanScore = "0";
let botScore = "0";
let tieScore = "0";

let won = "You win!";
let lost = "You lose!";
let tie = "It's a tie!";

// Add event listener to selection images
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  playerChoice = e.target.id;
  playerChoiceDisplay.innerHTML = playerChoice;
  generateCompChoice();
  getResult();
}));

// Function to generate the computers choice using random number and match to selection
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

// Gets the result by comparing all possible winning outcomes for player
function getResult() {

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

  // Writes result to HTML element
  resultDisplay.innerHTML = result;

  updateScore();
}

function updateScore() {
  // Increments the score depending on outcome
  if (result == won) {
    humanScore++;
  } else if (result == tie) {
    tieScore++;
  } else {
    botScore++;
  }

  // Writes scores to HTML element
  playerScore.innerHTML = humanScore;
  computerScore.innerHTML = botScore;
  tiedGame.innerHTML = tieScore;

  // Displays message once computer or player hits 10 points
  if (humanScore === 10) {
    gameOver("human");
  } else if (botScore === 10) {
    gameOver("bot");
  }
}

function gameOver(player) {
  possibleChoices.forEach(possibleChoice => possibleChoice.removeEventListener('click', (e) => {
  }));
  
  if (player == "human") {
    resultDisplay.innerHTML = "GAME OVER!! Congratulations you've won the game, press the reset button to start again";
  } else {
    resultDisplay.innerHTML = "GAME OVER!! Bad luck, you didn't win this time, press the reset button to try again";
  }
}

// Function to allow user to reset scores to 0 and restart game
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

// Modal variables
let modal = document.getElementById("rulesModal");
let btn = document.getElementById("rule-btn");
let span = document.getElementsByClassName("close")[0];

// Open modal on rules button click
btn.onclick = function () {
  modal.style.display = "block";
}

// Close model when X is clicked
span.onclick = function () {
  modal.style.display = "none";
}

// Close modal if user clicks outside of modal box
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
