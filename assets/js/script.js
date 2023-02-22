const machineScore = document.getElementById('machine-score');
const humanScore = document.getElementById('human-score');
const buttons = document.getElementsByClassName('btn');
const playerOptions = ["rock", "paper", "scissors", "lizard", "spock"]

for (let button of buttons) {
    button.addEventListener("click", function() {
        let humanChoice = this.getAttribute("data-type");
        startGame(humanChoice);
    })
}

function startGame(humanChoice) {
    let machineChoice = Math.floor(Math.random() * 5);

    let result = checkResult(playerOptions[machineChoice], [humanChoice]);
}

function winner() {
    let result = document.querySelector('.result');
    let playerScoreBoard = document.querySelector('.p-count');
    let computerScoreBoard = document.querySelector('.c-count');
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if(player === computer){
        result.textContent = 'Tie'
    }
    else if(player == 'rock'){
        if(computer == 'paper'){
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;

        }else{
            result.textContent = 'Player Won'
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if(player == 'scissors'){
        if(computer == 'rock'){
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if(player == 'paper'){
        if(computer == 'scissors'){
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
}