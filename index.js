let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
const resultDiv = document.querySelector("div.result");
const buttons = document.querySelectorAll(".button")


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerSelection = button.alt.toLowerCase();
    playRound(playerSelection, computerSelection)
  })
})

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
  let computerSelection = getComputerChoice().toLowerCase();
  playerSelection = playerSelection.toLowerCase();
  let result = '';

  if (playerSelection === computerSelection) {
    result = 'Tie';
  } else if (
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore += 1;
    result = 'Player Wins';
  } else {
    computerScore += 1;
    result = 'Computer Wins';
  }
  resultDiv.innerHTML = `<p> ${result} </p>`;
  return result;
}




// grab element div
// render out result