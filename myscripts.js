let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const playerResult = document.querySelector('#playerResult');
const computerResult = document.querySelector('#computerResult');
const gameResult = document.querySelector('#gameResult');
const endGame = document.querySelector('#endGame');
const playAgain = document.querySelector('.playAgain');
const restartGame = document.querySelector('#restartGame');

rock.addEventListener("click", function() {
    let playerSelection = "rock";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

paper.addEventListener("click", function() {
    let playerSelection = "paper";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

scissors.addEventListener("click", function() {
    let playerSelection = "scissors";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

playAgain.addEventListener("click", function() {
    playerScore = 0;
    computerScore = 0;
    rock.style.display = "block";
    rock.style.visibility = "visible";
    paper.style.display = "block";
    paper.style.visibility = "visible";
    scissors.style.display = "block";
    scissors.style.visibility = "visible";
    playAgain.style.display = "none";
    playAgain.style.visibility = "hidden";
    endGame.textContent = "";
    restartGame.textContent = "";
    computerResult.textContent = "Computer score: " + computerScore;
    playerResult.textContent = "Your score: " + playerScore;
});

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "Paper") {
        computerScore++;
        computerResult.textContent = "Computer score: " + computerScore;
        gameResult.textContent = "You lose! You selected rock and the computer selected paper!";
    } else if (playerSelection === "rock" && computerSelection === "Rock") {
        gameResult.textContent = "It's a draw! You and the computer both selected rock!";
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        playerScore++;
        playerResult.textContent = "Your score: " + playerScore;
        gameResult.textContent = "You win! You selected rock and the computer selected scissors!"
    } else if (playerSelection === "paper" && computerSelection === "Paper") {
        gameResult.textContent = "It's a draw! You and the computer both selected paper!";
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        playerScore++;
        playerResult.textContent = "Your score: " + playerScore;
        gameResult.textContent = "You win! You selected paper and the computer selected rock!";
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        computerScore++;
        computerResult.textContent = "Computer score: " + computerScore;
        gameResult.textContent = "You lose! You selected paper and the computer selected scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        playerScore++;
        playerResult.textContent = "Your score: " + playerScore;
        gameResult.textContent = "You win! You selected scissors and the computer selected paper!";
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        computerScore++;
        computerResult.textContent = "Computer " + computerScore;
        gameResult.textContent = "You lose! You selected scissors and the computer selected rock!";
    } else if (playerSelection === "scissors" && computerSelection === "Scissors") {
        gameResult.textContent = "It's a draw! You and the computer both selected scissors!";
    } 
    if (playerScore === 5 || computerScore === 5 ) {
        end();
    }
}
  
function end() {
    if (computerScore === 5 ) {
        gameResult.textContent = "";
        computerResult.textContent = "";
        playerResult.textContent = "";
        rock.style.display = "none";
        rock.style.visibility = "hidden";
        paper.style.display = "none";
        paper.style.visibility = "hidden";
        scissors.style.display = "none";
        scissors.style.visibility = "hidden";
        endGame.textContent = "You lose! The computer beat you five times. Better luck next time!";
        playAgain.style.display = "block";
        playAgain.style.visibility = "visible";
        restartGame.textContent = "Press the image to restart the game.";
    }
    else {
        gameResult.textContent = "";
        computerResult.textContent = "";
        playerResult.textContent = "";
        rock.style.display = "none";
        rock.style.visibility = "hidden";
        paper.style.display = "none";
        paper.style.visibility = "hidden";
        scissors.style.display = "none";
        scissors.style.visibility = "hidden";
        endGame.textContent = "You win! You beat the computer five times. Well done!";
        playAgain.style.display = "block";
        playAgain.style.visibility = "visible";
        restartGame.textContent = "Press the image to restart the game.";
    }
}