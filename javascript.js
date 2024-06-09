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

function getHumanChoice() {
    let humChoice = prompt("Rock, Paper, or Scissors");
    let caseInsensitive = humChoice[0].toUpperCase() + humChoice.substring(1).toLowerCase();
    return caseInsensitive;
}


function playRound(humanChoice=getHumanChoice(), computerChoice=getComputerChoice()) {
    if (humanChoice==="Paper" && computerChoice==="Rock"){
        console.log("You win! Paper beats Rock");
        alert("You win! Paper beats Rock");
        humanScore++;
    } else if (humanChoice==="Scissors" && computerChoice==="Paper"){
        console.log("You win! Scissors beats Paper");
        alert("You win! Scissors beats Paper");
        humanScore++;
    } else if (humanChoice==="Rock" && computerChoice==="Scissors"){
        console.log("You win! Rock beats Scissors");
        alert("You win! Rock beats Scissors");
        humanScore++;
    } else if (humanChoice==="Paper" && computerChoice==="Scissors"){
        console.log("You lose! Scissors beats Paper");
        alert("You lose! Scissors beats Paper");
        computerScore++;
    } else if (humanChoice==="Rock" && computerChoice==="Paper"){
        console.log("You lose! Paper beats Rock");
        alert("You lose! Paper beats Rock");
        computerScore++
    } else if (humanChoice==="Scissors" && computerChoice==="Rock"){
        console.log("You lose! Rock beats Scissors");
        alert("You lose! Rock beats Scissors");
        computerScore++
    } else if (humanChoice==="Scissors" && computerChoice==="Scissors"){
        console.log("Draw!");
        alert("Draw!");
    } else if (humanChoice==="Rock" && computerChoice==="Rock"){
        console.log("Draw!");
        alert("Draw!");
    } else if (humanChoice==="Paper" && computerChoice==="Paper"){
        console.log("Draw!");
        alert("Draw!");
    } else {
        console.log("Enter either of these values: Rock, Paper, or Scissors");
        alert("Enter either of these values: Rock, Paper, or Scissors");
    }
}

function playGame(){
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Player: ${humanScore}   Computer: ${computerScore}`);
    alert(`Player: ${humanScore}   Computer: ${computerScore}`);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Player: ${humanScore}   Computer: ${computerScore}`);
    alert(`Player: ${humanScore}   Computer: ${computerScore}`);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Player: ${humanScore}   Computer: ${computerScore}`);
    alert(`Player: ${humanScore}   Computer: ${computerScore}`);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Player: ${humanScore}   Computer: ${computerScore}`);
    alert(`Player: ${humanScore}   Computer: ${computerScore}`);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Player: ${humanScore}   Computer: ${computerScore}`);
    alert(`Player: ${humanScore}   Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log(`Congratulations! Your score: ${humanScore} Computer Score: ${computerScore}`);
        alert(`Congratulations! Your score: ${humanScore} Computer Score: ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lost! Your score: ${humanScore} Computer Score: ${computerScore}`);
        alert(`You lost! Your score: ${humanScore} Computer Score: ${computerScore}`);
        } 
    }
    playGame()

