const robotSelection = document.getElementById('robot-choice');
const yourSelection = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
const playerOptions = document.getElementsByClassName('btn');
let yourChoice
let robotChoice
let result


playerOptions.forEach(playerOptions => playerOptions.addEventListener('click', (e) => {
    yourChoice = e.target.id
    yourSelection.innerHTML = userChoice
    generaterobotChoice()
    getResult()
  }))
  
  function generaterobotChoice() {
    const randomNumber = Math.floor(Math.random() * 5) 
    
    if (randomNumber === 0) {
      robotChoice = 'rock'
    }
    if (randomNumber === 1) {
      robotChoice = 'scissors'
    }
    if (randomNumber === 2) {
      robotChoice = 'paper'
    }
    if (randomNumber === 3) {
        robotChoice = 'lizard'
      }
      if (randomNumber === 2) {
        robotChoice = 'spock'
      }
      
    robotSelection.innerHTML = computerChoice
  }
  
  function getResult() {
    if (computerChoice === userChoice) {
      result = 'its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
      result = 'you win!'
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
      result = 'you lost!'
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
      result = 'you win!'
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
      result = 'you lose!'
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
      result = 'you win!'
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
      result = 'you lose!'
    }
    resultDisplay.innerHTML = result
  }