let playerScore = 0;
let computerScore = 0;



function getComputerChoice() {

const choices = ['Rock', 'Paper', 'Scissors'];
return choices[Math.floor(Math.random() * choices.length)];

}

getComputerChoice()



function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = '';

    if (playerSelection === computerSelection) {
        result = `Tie`

    } else if 
    (playerSelection === 'Paper' && computerSelection === 'Rock'||
    playerSelection === 'Rock' && computerSelection === 'Scissors'||
    playerSelection === 'Scissors' && computerSelection === 'Paper') {
        
        playerScore++;
        result = 'Player Wins'

    } else {
        computerScore++;
        result = `Computer Wins`;

    }
    return result; 
}

playRound('Rock')