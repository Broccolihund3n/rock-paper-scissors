
function getComputerChoice(){
   //step 2, to get the computer choice
   let randomNumber = Math.random()*10;

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


//step 5, logic to play a round
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

//step 6, play more rounds
function playGame() {
   //step 4, declare score variables
   let computerScore = 0;
   let humanScore = 0;

   playRound(humanChoice, computerChoice);

   //to play one round and see who wins
   function playRound(humanChoice, computerChoice){
      
      if (humanChoice.toLowerCase() === "rock" && computerChoice === "paper" || humanChoice.toLowerCase() === "paper" && computerChoice === "scissors" || humanChoice.toLowerCase() === "scissors" && computerChoice === "rock"){
         console.log(`You loose! ${computerChoice} beats ${humanChoice}`);
          computerScore ++;
   
      } else if(humanChoice.toLowerCase() === computerChoice){
         console.log("It's a tie. Try again!");
      }
   
      else {
         console.log(`You win! ${humanChoice} beats ${computerChoice}`);
         humanScore ++;
      } 
      
      console.log("Human score:" + humanScore);
      console.log("Computer score:" + computerScore);
   }

   if (computerScore + humanScore === 5){
      console.log("Game over");
   } else {
      const humanChoice = getHumanChoice();
      const computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);
   }
   
}

playGame();
