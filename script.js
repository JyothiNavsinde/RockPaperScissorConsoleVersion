// console.log("Hello world");

let roundsplayed = 0;
const maxRounds = 5; 

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

/*function getHumanChoice() {
    let userChoice  = prompt("enter your choice!");
    console.log(userChoice);
    return userChoice;
}*/

let humanScore = 0;
let computerScore = 0;



function playGame() {

    function playRound(humanChoice, computerChoice) {
        if(humanChoice === "rock" && computerChoice === "paper") {
            let result = document.querySelector(".content");
            let resText =document.createElement("p"); 
            resText.innerText = "rock looses to paper";
            result.appendChild(resText);
            computerScore++;
            showRunningScore();
            roundsplayed++;
            checkIfGameOver();

        } else if(humanChoice === "rock" && computerChoice == "scissor") {
            let result = document.querySelector(".content");
            let resText =document.createElement("p"); 
            resText.innerText = "scissor looses to rock";
            result.appendChild(resText);
            humanScore++;
            showRunningScore();
            roundsplayed++;
            checkIfGameOver();
        } else if(humanChoice === "paper" && computerChoice == "scissor") {
            let result = document.querySelector(".content");
            let resText =document.createElement("p"); 
            resText.innerText = "paper looses to scissor";
            result.appendChild(resText);
            computerScore++;
            showRunningScore();
            
            roundsplayed++;
            checkIfGameOver();

        } else if(humanChoice === "paper" && computerChoice === "rock")  {
            let result = document.querySelector(".content");
            let resText =document.createElement("p"); 
            resText.innerText = "rock looses to paper";
            result.appendChild(resText);
            humanScore++;
            showRunningScore();
            roundsplayed++;
            checkIfGameOver();

        } else if(humanChoice === "scissor" && computerChoice == "rock") {
            let result = document.querySelector(".content");
            let resText =document.createElement("p"); 
            resText.innerText = "scissor looses to rock";
            result.appendChild(resText);
            computerScore++;
            showRunningScore();
            roundsplayed++;
            checkIfGameOver();

        } else if(humanChoice === "scissor" && computerChoice == "paper") {
            let result = document.querySelector(".content");
            let resText =document.createElement("p"); 
            resText.innerText = "paper looses to scissor";
            result.appendChild(resText);
            humanScore++;
            showRunningScore();
            roundsplayed++;
            checkIfGameOver();

        } else {
            let result = document.querySelector(".content");
            let resText =document.createElement("p"); 
            resText.innerText = "It's a tie! play again";
            result.appendChild(resText);
        }
    }

   

    




    
    /*for(let i=0; i<5; i++) {
        let humanChoice = getHumanChoice().toLowerCase();
    console.log(humanChoice);
    let computerChoice = getComputerChoice().toLowerCase();
    console.log(computerChoice);
    playRound(humanChoice, computerChoice);
    }*/

    const btnRock = document.querySelector("#rock");
    const btnPaper = document.querySelector("#paper");
    const btnScissor = document.querySelector("#scissor");

    btnRock.addEventListener("click", () => {
        let humanChoice = "rock";
        console.log(humanChoice);
        let computerChoice = getComputerChoice().toLowerCase();
        console.log(computerChoice);
        playRound(humanChoice, computerChoice);
    })

    btnPaper.addEventListener("click", () => {
        let humanChoice = "paper";
        console.log(humanChoice);
        let computerChoice = getComputerChoice().toLowerCase();
        console.log(computerChoice);
        playRound(humanChoice, computerChoice);
    })

    btnScissor.addEventListener("click", () => {
        let humanChoice = "scissor";
        console.log(humanChoice);
        let computerChoice = getComputerChoice().toLowerCase();
        console.log(computerChoice);
        playRound(humanChoice, computerChoice);
    })


    /*if(humanScore > computerScore) {
        let divCont = document.querySelector(".content");
        let para1 = document.createElement("p");
        para1.innerText = "congratulations! You beat the computer! and the score is "+ humanScore"
        console.log();
    } else if(computerScore > humanScore) {
        console.log("the computer won! and the score is "+computerScore);
    } else {
        console.log("It's a draw! Try again!");
    }*/

    function showRunningScore() {
        const scoreDiv = document.querySelector(".showScore");
        scoreDiv.innerText = `Player: ${humanScore} | Computer: ${computerScore}`;
    }

    function checkIfGameOver() {
        if(roundsplayed == maxRounds) {
            const result = document.querySelector(".content");
            const finalMsg = document.createElement("p");
            if(humanScore > computerScore) {
                finalMsg.innerText = "You won the game!";
            } else if(computerScore > humanScore) {
                finalMsg.innerText = "Computer won the game!";
            } else {
                finalMsg.innerText = "It's a draw";
            }

            result.appendChild(finalMsg);

            document.querySelector("#rock").disabled = true;
            document.querySelector("#paper").disabled = true;
            document.querySelector("#scissor").disabled = true;
        }
    }
    
}

playGame();



