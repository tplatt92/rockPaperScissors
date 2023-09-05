const playerScore = 0;
const computerScore = 0;
const result = '';

const choices = ['Rock', 'Paper', 'Scissors'];

const randomChoice = () => Math.floor(Math.random()* choices.length);

console.log(randomChoice);