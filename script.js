function getComputerChoice(){
    const choices = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}


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
        return `You Win! ${playerChoice} beats ${computerSelection}.`;
    }else{
        return `You Lose! ${computerSelection} beats ${playerChoice}.`;
    }

}


function game(){
    for(let i = 0; i < 5; i++){
        playerSelection = window.prompt("Choose rock, paper or scissor");
        let result = playRound(playerSelection, getComputerChoice());
        resultContainer.innerHTML += `<p>${result}</p>`;
    }
}

