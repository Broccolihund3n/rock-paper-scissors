

//step 2, to get the computer choice
let randomNumber = Math.random()*10;


function getComputerChoice(){
  if (randomNumber <4){
   console.log("The computer picked rock");
   return "rock";

 } else if (randomNumber >3 && randomNumber <7){
    console.log("The computer picked paper");
    return "paper";

 } else {
    console.log("The computer picked scissors");
    return "scissors";
    }
}



//step 3, to get the human choice
function getHumanChoice() {
let choice = prompt("Rock, paper or scissors?", "rock");
console.log("You picked "+ choice);
return choice;
}


//step 4, declare score variables
let computerScore = 0;
let humanScore = 0;

//step 5, logic to play a round

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

//make sure all versions are here
function playRound(humanChoice, computerChoice){
   if (humanChoice === "rock" && computerChoice === "paper"){
      console.log(`You loose! ${computerChoice} beats ${humanChoice}`);

   } else if (humanChoice === "rock" && computerChoice ==="scissors"){
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
 
   } else if(humanChoice === computerChoice){
      console.log("It's a tie. Try again!");
   }
   else {
      console.log("Add more options")
   }
}


playRound(humanChoice, computerChoice);


