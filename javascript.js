

//step 2, to get the computer choice
let randomNumber = Math.random()*10;


function getComputerChoice(){
  if (randomNumber <4){
   console.log("The computer picked rock");
   return "Rock";

 } else if (randomNumber >3 && randomNumber <7){
    console.log("The computer picked paper");
    return "Paper";

 } else {
    console.log("The computer picked scissors");
    return "Scissors";
    }
}



//step 3, to get the human choice
function getHumanChoice() {
let choice = prompt("Rock, paper or scissors?", "rock");
console.log("You picked "+ choice);
}


//step 4, declare score variables
let computerScore = 0;
let humanScore = 0;

//step 5, logic to play a round

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

//something is wrong here
function playRound(humanChoice, computerChoice){
   if (humanChoice === "rock" && computerChoice === "paper"){
      console.log("You loose! Paper beats Rock");

   } else if (humanChoice === "rock" && computerChoice ==="scissors"){
      console.log("You win! Scissors beats paper.");

   } else if(humanChoice === "rock" && computerChoice ==="rock"){
      console.log("It's a tie. Try again!");
   }
   else {
      console.log("It doesn't work")
   }
}


playRound(humanChoice, computerChoice);


