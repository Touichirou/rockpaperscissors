//  Ask player to choose rock, paper, or scissors
//  Computer randomly chooses rock, paper, or scissors //

//  If player chooses rock and computer chooses scissors, player gets 1 point //
//  If player chooses rock and computer chooses paper, computer gets 1 point //
//  If player chooses rock and computer chooses rock, nobody gets a point //
//  If player chooses paper and computer chooses scissors, computer gets 1 point //
//  If player chooses paper and computer chooses paper, nobody gets a point //
//  If player chooses paper and computer chooses rock, player gets 1 point //
//  If player chooses scissors and computer chooses scissors, nobody gets a point
//  If player chooses scissors and computer chooses paper, player gets 1 point
//  If player chooses scissors and computer chooses rock, computer gets 1 point

//  If player gets 5 points first, he/she wins
//  If computer gets 5 points first, it wins



function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerSelection);    
    return computerSelection;
}
    

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === "rock" && computerSelection === "Paper") {
        return "You lose! Paper beats rock!";
    } else if (playerSelection === "rock" && computerSelection === "Rock") {
        return "It's a draw!";
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        return "You win! Rock beats scissors!";
    } else if (playerSelection === "paper" && computerSelection === "Paper") {
        return "It's a draw!"; 
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        return "You win! Paper beats rock!";
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beats paper!";
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        return "You win! Scissors beat paper!";
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "Scissors") {
        return "It's a draw!";
    }
}
       
let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
    
