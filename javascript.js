// ROCK PAPER SCISORS

let computerScore = 0;
let playerScore = 0 ;
const choices = ["Rock", "Paper", "Scissors"];
let playereSelection;

function getComputerChoice() {  
  return choices[Math.floor(Math.random()*choices.length)];
}

function gameRound(playerSelection, computerSelection = getComputerChoice().toLowerCase()) {
  
  console.log(computerSelection);
  if (playerSelection === computerSelection) {
    result = 0; 
    aconsole.log(`you have both chosen ${playerSelection}, it's a tie`);
      
    // Won round - adding score to playerScore 

   } else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissoros" && computerSelection == "paper") {
      console.log(`you win! ${playerSelection} wins over ${computerSelection}`)
      ++playerScore;
      addScore_player();
         if (computerScore == 5 || playerScore == 5) { 
         alert('smth');
      };
      return 

      // Lost round - adding score to computerScore

   } else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors"|| playerSelection == "scissors" && computerSelection == "rock") {
      console.log(`You loose, ${playerSelection} looses agnist ${computerSelection}`)
      ++computerScore;
      addScore_comp();
         if (computerScore == 5 || playerScore == 5) { 
            alert('smth');
         }
      return 
   } 
}


function finishGame() {
   if (playerScore > computerScore) {
      alert (` score is ${playerScore} to ${computerScore}. You win!`) 
   } else if (playerScore == computerScore){ 
      alert (" it's a tie");
   } else {
      alert (`score is ${playerScore} to ${computerScore}. You loose :()`)
   }
}







// ---------------- DOM --------------------




function addScore_player() { 
   let add_score = document.querySelector(".scoreboard");
   let old_score = document.querySelector("#player");
   let score = add_score.removeChild(old_score);

   let new_score = document.createElement('div');
   new_score.classList.add("scoreboard_score");
   new_score.setAttribute('id', 'player');
   new_score.textContent = `${playerScore}`;

   let ref_node = document.querySelector("#comp");
   add_score.insertBefore(new_score, ref_node);
}


function addScore_comp() { 
   let add_score = document.querySelector(".scoreboard");
   let old_score = document.querySelector("#comp");
   let score = add_score.removeChild(old_score);

   let new_score = document.createElement('div');
   new_score.classList.add("scoreboard_score");
   new_score.setAttribute('id', 'comp');
   new_score.textContent = `${computerScore}`;

   let ref_node = document.querySelector("#p_1");
   add_score.insertBefore(new_score, ref_node);
}



const rock = document.querySelector("#rock")
rock.addEventListener('click',function() {gameRound("rock"); 
   });

const paper = document.querySelector("#paper")
paper.addEventListener('click',function() {gameRound("paper")      
   });

const scissors = document.querySelector("#scissors")
scissors.addEventListener('click',function() {gameRound("scissors")      
   });









 

  



