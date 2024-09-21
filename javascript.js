let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
   compChoice = Math.random() * 100;
    if (compChoice > 70) {
        compChoice = "Rock";
    } else if (compChoice > 40) {
        compChoice = "Paper";
    } else {
        compChoice = "Scissors";
    }
    return compChoice;
}

const rockButton = document.querySelector('#rock');
rockButton.textContent = "ROCK";
rockButton.addEventListener("click", () => {
    playRound(humanChoice="Rock");
});
const paperButton = document.querySelector('#paper');
paperButton.textContent = "PAPER";
paperButton.addEventListener("click", () => {
    playRound(humanChoice="Paper");
});
const scissorsButton = document.querySelector('#scissors');
scissorsButton.textContent = "SCISSORS";
scissorsButton.addEventListener("click", () => {
    playRound(humanChoice="Scissors");
});
const displayStats = document.querySelector('#display');
let result = document.createElement('p');   
let humScore = document.createElement('h5');
let comScore = document.createElement('h5');

displayStats.appendChild(result); 
displayStats.appendChild(humScore); 
displayStats.appendChild(comScore); 

function playRound(humanChoice, computerChoice=getComputerChoice()) {

    if (humanScore  === 5 ) {
        alert(`Congratulations! You won!`);
    } else if (computerScore === 5 ) {
        alert(`You lost! Computer won!`);
    } else if (humanChoice==="Paper" && computerChoice==="Rock"){
        result.textContent = '';
        result.append('You win! Paper beats Rock')
        humanScore++;
        humScore.textContent = (`Player Score: ${humanScore}`);
        comScore.textContent = (`Computer Score: ${computerScore}`);
    } else if (humanChoice==="Scissors" && computerChoice==="Paper"){
        result.textContent = '';
        result.append("You win! Scissors beats Paper");
        humanScore++;
        humScore.textContent = (`Player Score: ${humanScore}`);
        comScore.textContent = (`Computer Score: ${computerScore}`);
    } else if (humanChoice==="Rock" && computerChoice==="Scissors"){
        result.textContent = '';
        result.append("You win! Rock beats Scissors");
        humanScore++;
        humScore.textContent = (`Player Score: ${humanScore}`);
        comScore.textContent = (`Computer Score: ${computerScore}`);
    } else if (humanChoice==="Paper" && computerChoice==="Scissors"){
        result.textContent = '';
        result.append("You lose! Computer chose Scissors! Scissors beats Paper!"); 
        computerScore++;
        humScore.textContent = (`Player Score: ${humanScore}`);
        comScore.textContent = (`Computer Score: ${computerScore}`);
    } else if (humanChoice==="Rock" && computerChoice==="Paper"){
        result.textContent = '';
        result.append("You lose! Computer chose Paper! Paper beats Rock!");
        computerScore++;
        humScore.textContent = (`Player Score: ${humanScore}`);
        comScore.textContent = (`Computer Score: ${computerScore}`);
    } else if (humanChoice==="Scissors" && computerChoice==="Rock"){
        result.textContent = '';
        result.append("You lose! Computer chose Rock! Rock beats Scissors!");
        computerScore++;
        humScore.textContent = (`Player Score: ${humanScore}`);
        comScore.textContent = (`Computer Score: ${computerScore}`);
    } else if (humanChoice==="Scissors" && computerChoice==="Scissors"){
        result.textContent = '';
        result.append("Draw!");
    } else if (humanChoice==="Rock" && computerChoice==="Rock"){
        result.textContent = '';
        result.append("Draw!");
    } else if (humanChoice==="Paper" && computerChoice==="Paper"){
        result.textContent = '';
        result.append("Draw!");
    } else {
        result.append("Enter either of these values: Rock, Paper, or Scissors");
    }
}


