let playerScore = 0;
let computerScore = 0;

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
  return result;
}

console.log(playRound('Rock'));
console.log(`Player Score: ${playerScore}`);
console.log(`Computer Score: ${computerScore}`);
