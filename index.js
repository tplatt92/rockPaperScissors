const playerScore = 0;
const computerScore = 0;
const result = '';


function computerPlay() {

const choices = ['Rock', 'Paper', 'Scissors'];
return choices[Math.floor(Math.random() * choices.length)];

}

computerPlay()