

//step 2, to get the computer choice
let randomNumber = Math.random()*10;


function getComputerChoice(){
  if (randomNumber <4){
   console.log("rock");
   return "Rock";

 } else if (randomNumber >3 && randomNumber <7){
    console.log("paper");
    return "Paper";

 } else {
    console.log("scissors");
    return "Scissors";
    }
}

getComputerChoice();


//step 3, to get the human choice
function getHumanChoice() {
let choice = prompt("Rock, paper or scissors?", "Rock");
console.log("You picked "+ choice);
}
getHumanChoice();

//step 4, declare score variables
let computerScore = 0;
let humanScore = 0;
