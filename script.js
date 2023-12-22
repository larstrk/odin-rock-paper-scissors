function getComputerChoice(){
    const choices = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection){
    // Convert playerSelection to lowercase for case-insensitivity
    const playerChoice = playerSelection.toLowerCase();

    // Check if playerChoice is valid
    const choices = ['rock', 'paper', 'scissor'];

    // Check if the player's choice is valid
    if (!choices.includes(playerChoice)) {
      return 'Invalid choice. Please choose Rock, Paper or Scissors.';
    }

    // Check for a Tie
    if (playerChoice == computerSelection){
        return 'Its a tie!'
    }

    // Check the result if its not a tie
    if( 
        (playerChoice == 'rock' && computerSelection == 'scissor') ||
        (playerChoice == 'paper' && computerSelection == 'rock') ||
        (playerChoice == 'scissor' && computerSelection == 'paper')
    ){
        playerScore++;
        return `You Win! ${playerChoice} beats ${computerSelection}.`;
    }else{
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerChoice}.`;
    }

}

function showResult(result){
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.textContent = result
}

function updateScore(){
    const scoreContainer = document.getElementById("scoreContainer");
    const playerScoreContainer = document.getElementById("player-score")
    playerScoreContainer.textContent = playerScore;

    const computerScoreContainer = document.getElementById("computer-score")
    computerScoreContainer.textContent = computerScore;

    // Überprüfe, ob das "winner"-Element bereits existiert
    const winner = document.getElementById("winner");

    // Wenn es existiert, entferne es
    if (winner) {
        scoreContainer.removeChild(winner);
    }

    if (playerScore === 5){
        const winner = document.createElement('div');
        winner.id = "winner";
        winner.textContent = 'You win!';
        scoreContainer.appendChild(winner);
        computerScore = 0;
        playerScore = 0;
    }else if (computerScore === 5){
        const winner = document.createElement('div');
        winner.id = "winner";
        winner.textContent = 'Computer wins!';
        scoreContainer.appendChild(winner);
        computerScore = 0;
        playerScore = 0;
    }
}

document.getElementById("rock").addEventListener("click", function(){
    let result = playRound("rock", getComputerChoice());
    showResult(result);
    updateScore();
})

document.getElementById("paper").addEventListener("click", function(){
    let result = playRound("paper", getComputerChoice());
    showResult(result);
    updateScore();
})

document.getElementById("scissors").addEventListener("click", function(){
    let result = playRound("scissor", getComputerChoice());
    showResult(result);
    updateScore();
})

// function game(){
//     for(let i = 0; i < 5; i++){
//         playerSelection = window.prompt("Choose rock, paper or scissor");
//         let result = playRound(playerSelection, getComputerChoice());
//         resultContainer.innerHTML += `<p>${result}</p>`;
//     }
// }

