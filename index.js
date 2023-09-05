const playerScore = 0;
const computerScore = 0;
const result = '';


function getComputerChoice() {

const choices = ['Rock', 'Paper', 'Scissors'];
return choices[Math.floor(Math.random() * choices.length)];

}

getComputerChoice()



function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result = `Tie`

    } else if 
    (playerSelection === 'Paper' && computerSelection === 'Rock'||
    playerSelection === 'Rock' && computerSelection === 'Scissors'||
    playerSelection === 'Scissors' && computerSelection === 'Paper') {
        
        result = 'Player Wins'

    } else {

        result = `Computer Wins`

    }
    return result 
}