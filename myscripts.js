function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerSelection);    
    return computerSelection;
}


   
 
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    
    
    if (playerSelection === "rock" && computerSelection === "Paper") {
        computerScore++;
        return "You lose! Paper beats rock!";
    } else if (playerSelection === "rock" && computerSelection === "Rock") {
        return "It's a draw!";
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        playerScore++;
        return "You win! Rock beats scissors!";
    } else if (playerSelection === "paper" && computerSelection === "Paper") {
        return "It's a draw!"; 
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        playerScore++;
        return "You win! Paper beats rock!";
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        computerScore++;
        return "You lose! Scissors beats paper!";
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        playerScore++;
        return "You win! Scissors beat paper!";
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        computerScore++;
        return "You lose! Rock beats scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "Scissors") {
        return "It's a draw!";
    }
    
}


function game() {
    
for (let i = 0; i < 5; i++) {
    playRound();

    let playerSelection = prompt("Rock, paper, or scissors?");

    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection))
    console.log(playerSelection)
    console.log("your score = " + playerScore);
    console.log("Computer's score = " + computerScore);
    }
}

function endGame() {

    if (playerScore > computerScore) {
        console.log("You win!")
    } else {
        console.log("You lose!")
    }
}    
        
game()
endGame()
     
  


