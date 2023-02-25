// List all DOM variables //
const compChoiceDisplay = document.getElementById("comp-choice")
const playerChoiceDisplay = document.getElementById("player-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let playerChoice
let compChoice
let result

// Add event listener to buttons //
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  playerChoice = e.target.id
  playerChoiceDisplay.innerHTML = playerChoice
  generateCompChoice()
  getResult()
}))

// Function to generate the computers choice using random number //
function generateCompChoice() {
  const computerOption = Math.floor(Math.random() * 5) 
  
  if (computerOption === 0) {
    compChoice = "Rock"
  }
  if (computerOption === 1) {
    compChoice = "Scissors"
  }
  if (computerOption === 2) {
    compChoice = "Paper"
  }
  if (computerOption === 3) {
    compChoice = "Lizard"
  }
  if (computerOption === 4) {
    compChoice = "Spock"
  }
  compChoiceDisplay.innerHTML = compChoice
}

// Gets the result by comparing all possible outcomes //
function getResult() {
  if (compChoice === playerChoice) {
    result = "It's a draw!"
  }
  if (compChoice === "Rock" && playerChoice === "Paper") {
    result = "You win!"
  }
  if (compChoice === "Rock" && playerChoice === "Scissors") {
    result = "You lost!"
  }
  if (compChoice === "Rock" && playerChoice === "Lizard") {
    result = "You lose!"
  }
  if (compChoice === "Rock" && playerChoice === "Spock") {
    result = "You win!"
  }
  if (compChoice === "Paper" && playerChoice === "scissors") {
    result = "You win!"
  }
  if (compChoice === "Paper" && playerChoice === "Lizard") {
    result = "You win!"
  }
  if (compChoice === "Paper" && playerChoice === "Spock") {
    result = "You lose!"
  }
  if (compChoice === "Paper" && playerChoice === "Rock") {
    result = "You lose!"
  }
  if (compChoice === "Scissors" && playerChoice === "Rock") {
    result = "You win!"
  }
  if (compChoice === "Scissors" && playerChoice === "Paper") {
    result = "You lose!"
  }
  if (compChoice === "Scissors" && playerChoice === "Lizard") {
    result = "You lose!"
  }
  if (compChoice === "Scissors" && playerChoice === "Spock") {
    result = "You win!"
  }
  if (compChoice === "Lizard" && playerChoice === "Spock") {
    result = "You lose!"
  }
  if (compChoice === "Lizard" && playerChoice === "Rock") {
    result = "You win!"
  }
  if (compChoice === "Lizard" && playerChoice === "Paper") {
    result = "You lose!"
  }
  if (compChoice === "Lizard" && playerChoice === "Scissors") {
    result = "You win!"
  }
  if (compChoice === "Spock" && playerChoice === "Rock") {
    result = "You lose!"
  }
  if (compChoice === "Spock" && playerChoice === "Paper") {
    result = "You win!"
  }
  if (compChoice === "Spock" && playerChoice === "Scissors") {
    result = "You lose!"
  }
  if (compChoice === "Spock" && playerChoice === "Lizard") {
    result = "You win!"
  }
  resultDisplay.innerHTML = result
}