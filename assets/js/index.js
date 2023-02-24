document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function() {
      let playerChoice = this.getAttribute("data-index");
      runGame(playerChoice);
    });
  }  
})

function runGame(playerChoice) {
  let computerChoice = Math.floor(Math.random() * 5);
  let result = checkWinner(choices[computerChoice], choices[playerChoice]);

  updateScores(result);
}



if (this.getAttribute("data-index") === "0") {
  alert("You clicked rock!");
} else if (this.getAttribute("data-index") === "1") {
  alert("You clicked paper!");
} else if (this.getAttribute("data-index") === "2") {
  alert("You clicked Scissors!");
} else if (this.getAttribute("data-index") === "3") {
  alert("You clicked lizard!");
} else if (this.getAttribute("data-index") === "4") {
  alert("You clicked spock!");
}