// console.log("Hello world");
function getComputerChoice() {
    let compChoice = Math.floor(Math.random()*3);
    console.log(compChoice);
    if(compChoice === 0) {
        return "rock";
    } else if(compChoice === 1) {
        return "paper";
    } else {
        return "scissor";
    }
}

function getHumanChoice() {
    let userChoice  = prompt("enter your choice!");
    console.log(userChoice);
    return userChoice;
}

let humanScore = 0;
let computerScore = 0;



function playGame() {

    function playRound(humanChoice, computerChoice) {
        if(humanChoice === "rock" && computerChoice === "paper") {
            console.log("you won! hurray..");
            humanScore++;
        } else if(humanChoice === "rock" && computerChoice == "scissor") {
            console.log("computer won! better luck next time...");
            computerScore++;
        } else if(humanChoice === "paper" && computerChoice == "scissor") {
            console.log("computer won! better luck next time..");
            computerScore++;
        } else if(humanChoice === "paper" && computerChoice === "rock")  {
            console.log("you won! congratulations...");
            humanScore++;
        } else if(humanChoice === "scissor" && computerChoice == "rock") {
            console.log("computer won! better luck next time..");
            computerScore++;
        } else if(humanChoice === "scissor" && computerChoice == "paper") {
            console.log("you won! Gud job...");
            humanScore++;
        } else {
            console.log("It's a tie! play again")
        }
    }
    
    for(let i=0; i<5; i++) {
        let humanChoice = getHumanChoice().toLowerCase();
    console.log(humanChoice);
    let computerChoice = getComputerChoice().toLowerCase();
    console.log(computerChoice);
    playRound(humanChoice, computerChoice);
    }

    if(humanScore > computerScore) {
        console.log("congratulations! You beat the computer! and the score is "+ humanScore);
    } else if(computerScore > humanScore) {
        console.log("the computer won! and the score is "+computerScore);
    } else {
        console.log("It's a draw! Try again!");
    }
}



