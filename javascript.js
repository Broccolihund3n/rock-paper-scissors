
let randomNumber = Math.random()*10;

function getComputerChoice(){
  if (randomNumber <4){
   console.log("rock");

 } else if (randomNumber >3 && randomNumber <7){
    console.log("paper");

 } else {
    console.log("scissors");
    }
}

getComputerChoice();
