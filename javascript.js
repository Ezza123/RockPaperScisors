// ROCK PAPER SCISORS


const choices = ["Rock", "Paper", "Scisors"];


function getComputerChoice() {  
  return choices[Math.floor(Math.random()*choices.length)];
}

function gameRound(playerSelection, computerSelection) {
  playerSelection = playerChoice.toLowerCase();
  computerSelection = getComputerChoice().toLowerCase();
  console.log(computerSelection);
  if (playerSelection === computerSelection) {
    result = `you have both chosen ${playerSelection}, it's a tie`;
    
    // WIN CONDITION 
 } else if (playerSelection == "rock" && computerSelection == "scisors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scisoros" && computerSelection == "paper") {
    alert(`you win! ${playerSelection} wins over ${computerSelection}`);

    // LOOSE CONDITION
 } else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scisors"|| playerSelection == "scisoros" && computerSelection == "rock") {
    alert(`You loose, ${playerSelection} looses agnist ${computerSelection}`);

 } 




  // alert(result);
}
  
  
  
 



let playerChoice = prompt("message");



gameRound();



 

  



