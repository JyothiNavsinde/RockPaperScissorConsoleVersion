// console.log("Hello world");
function getComputerChoice() {
    let compChoice = Math.floor(Math.random()*3);
    console.log(compChoice);
    if(compChoice == 0) {
        return "rock";
    } else if(compChoice == 1) {
        return "paper";
    } else {
        return "scissor";
    }
}
