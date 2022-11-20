// ROCK PAPER SCISORS

let computerScore = 0;
let playerScore = 0
const choices = ["Rock", "Paper", "Scisors"];


function getComputerChoice() {  
  return choices[Math.floor(Math.random()*choices.length)];
}

function gameRound(computerSelection = getComputerChoice().toLowerCase()) {
  let playerSelection = prompt("please choose Rock/Paper/Scisors.").toLowerCase();
  
  console.log(computerSelection);
  if (playerSelection === computerSelection) {
    result = 0; 
    alert(`you have both chosen ${playerSelection}, it's a tie`);
      
    // WIN CONDITION - adding score to playerScore (is supposed to)
 } else if (playerSelection == "rock" && computerSelection == "scisors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scisoros" && computerSelection == "paper") {
    alert(`you win! ${playerSelection} wins over ${computerSelection}`)
    
    return ++playerScore

    // LOOSE CONDITION - adding score to computerScore
 } else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scisors"|| playerSelection == "scisors" && computerSelection == "rock") {
     alert(`You loose, ${playerSelection} looses agnist ${computerSelection}`)
     
    return ++computerScore
 } 

}

function game(){
   

   for ( let i = 0; i < 6; i++) {
      let round = i + 1;
      console.log(i);
      console.log(round);
      // end game condition, winner announcment and do you wanna play again. 

      if (round == 6){
         function finishGame() {
            if (playerScore > computerScore) {
               alert (` score is ${playerScore} to ${computerScore}. You win!`) 
            } else if (playerScore == computerScore){ 
               alert (" it's a tie");
            } else {
               alert (`score is ${playerScore} to ${computerScore}. You loose :()`)
            }

            let nextGame = prompt (`do you wanna play again? (yes/no)`);
            if (/yes/i.test(nextGame)) {
               console.log(nextGame);
               computerScore = 0;
               playerScore = 0;
               game()
            } else {
               console.log(nextGame);
            alert("thanks for playing! see you around :)")
         } }
         finishGame();

      } else if (round == 1){
         alert(`Round ${round} is begining, good luck!`);
         gameRound(computerSelection = getComputerChoice().toLowerCase());
         
      
         // Rounds and score assigment 
      } else if (round < 6) {

         alert(`Round ${round}. Score is ${playerScore} to ${computerScore} `);
         
         gameRound(computerSelection = getComputerChoice().toLowerCase());
      } 


   }
}

  

game();
  
  
 



//let playerChoice = prompt("message");



// jestem z rodzinka wiec tylko stream z kodowania :) + glosna muzyka ...


 

  



