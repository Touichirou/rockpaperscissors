const choices = ["Rock", "Paper", "Scissors"];
let computerChoice = choices[Math.floor(Math.random() * choices.length)];
console.log(computerChoice);
    
function getComputerChoice() {
    return computerChoice
}



