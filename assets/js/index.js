// jshint esversion: 6

// List all DOM variables 
const compChoiceDisplay = document.getElementById("comp-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");
const endGameDisplay = document.getElementById("end-game");
const possibleChoices = document.querySelectorAll("img");
const computerScore = document.getElementById("comp-score");
const playerScore = document.getElementById("player-score");
const tiedGame = document.getElementById("tied-game");
const startBtn = document.getElementById("start-btn");
const ruleBtn = document.getElementById("rule-btn");
const closeBtn = document.getElementById("close-btn");
const resetBtn = document.getElementById("reset");


// Variables for player selection, computer section and result
let playerChoice;
let compChoice;
let result;
let message;

// Variables to hold scores
let humanScore = "0";
let botScore = "0";
let tieScore = "0";

let won = "You win!";
let lost = "You lose!";
let tie = "It's a tie!";

startBtn.addEventListener("click", startGame);

// Function to show game screen and hide start screen
function startGame() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("game-screen").style.display = "block";
}

// Modal variables
let modal = document.getElementById("rules-modal");

// Open modal on rules button click
ruleBtn.addEventListener("click", rules);

function rules() {
  modal.style.display = "block";
}

// Close model when X is clicked
closeBtn.addEventListener("click", closeModal);

function closeModal () {
  modal.style.display = "none";
}

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
    message = "You Win! Paper Wraps Rock";

  } else if (compChoice === "Rock" && playerChoice === "Spock") {
    result = won;
    message = "You Win! Spock Vaporizes Rock";

  } else if (compChoice === "Paper" && playerChoice === "Scissors") {
    result = won;
    message = "You Win! Scissors Cuts Paper";

  } else if (compChoice === "Paper" && playerChoice === "Lizard") {
    result = won;
    message = "You Win! Lizard Eats Paper";

  } else if (compChoice === "Scissors" && playerChoice === "Rock") {
    result = won;
    message = "You Win! Rock Smashed Scissors";

  } else if (compChoice === "Scissors" && playerChoice === "Spock") {
    result = won;
    message = "You Win! Spock Smashes Scissors";

  } else if (compChoice === "Lizard" && playerChoice === "Rock") {
    result = won;
    message = "You Win! Rock Crushes Lizard";

  } else if (compChoice === "Lizard" && playerChoice === "Scissors") {
    result = won;
    message = "You Win! Scissors Decapitates Lizard";

  } else if (compChoice === "Spock" && playerChoice === "Paper") {
    result = won;
    message = "You Win! Paper Disproves Spock";

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

  // Once either player or computer hits ten, the gameover function is called.
  if (humanScore === 10) {
    gameOver("human");
  } else if (botScore === 10) {
    gameOver("bot");
  }
}
// Game over function hides game screen and shows game over screen
function gameOver(player) {
  document.getElementById("game-screen").style.display = "none";
  document.getElementById("game-over").style.display = "block";

 // Writes won or lost message to html element
  if (player == "human") {
    endGameDisplay.innerHTML = "Congratulations, You win!!";
  } else {
    endGameDisplay.innerHTML = "Bad luck!, you didn't win this time";
  }
}

resetBtn.addEventListener("click", restartGame);

// Function to allow user to reset scores to 0 and restart game
function restartGame() {
  document.getElementById("game-screen").style.display = "block";
  document.getElementById("game-over").style.display = "none";
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

