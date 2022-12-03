// ROCK PAPER SCISORS

let computerScore = 0;
let playerScore = 0 ;
const choices = ["Rock", "Paper", "Scissors"];
let playerSelection;

function getComputerChoice() {  
  return choices[Math.floor(Math.random()*choices.length)];
}

function gameRound(playerSelection, computerSelection = getComputerChoice().toLowerCase()) {
  
  
  if (playerSelection === computerSelection) {
    result = 0; 
    player_tie_text_display(playerSelection);
      
    change_choiceDis_player(playerSelection);
    change_choiceDis_comp (computerSelection);

    // Won round - adding score to playerScore 

   } else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissoros" && computerSelection == "paper") {
      change_choiceDis_player(playerSelection);
      change_choiceDis_comp (computerSelection);

      console.log(`you win! ${playerSelection} wins over ${computerSelection}`)
      ++playerScore;
      addScore_player();
      player_win_text_display(playerSelection, computerSelection);
         if (computerScore < 5 || playerScore < 5){
            player_win_text_display(playerSelection, computerSelection);
         } else {player_match_win_display (playerScore,computerScore);
         }
      return 

      // Lost round - adding score to computerScore

   } else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors"|| playerSelection == "scissors" && computerSelection == "rock") {
      change_choiceDis_player(playerSelection);
      change_choiceDis_comp (computerSelection);
      console.log(`You loose, ${playerSelection} looses agnist ${computerSelection}`)
      ++computerScore;
      addScore_comp();
         if (computerScore < 5 || playerScore < 5){
      player_loose_text_display(playerSelection, computerSelection);
         } else {player_match_loose_display (playerScore,computerScore);
         }
         
      return 
   } 
}


function finishGame() {
   if (playerScore > computerScore) {
      player_match_win_display(playerScore, computerScore);
   } else {
      player_match_loose_display (playerScore,computerScore);
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

function change_choiceDis_player(playerSelection) {
   let player_choice_display = document.querySelector(".player_selection");
   let player_old_choice = document.querySelector("#player_default")
   let remove_old = player_choice_display.removeChild(player_old_choice);

   let player_new_choice = document.createElement('div');
   player_new_choice.classList.add("selection_text");
   player_new_choice.textContent = `${playerSelection}`;
   
   player_new_choice.setAttribute('id', 'player_default');
   
  
   player_choice_display.appendChild(player_new_choice);
}


function change_choiceDis_comp (computerSelection){
   let comp_choice_display = document.querySelector(".comp_selection");
   let comp_old_choice = document.querySelector("#comp_default")
   let remove_old = comp_choice_display.removeChild(comp_old_choice);

   let comp_new_choice = document.createElement('div');
   comp_new_choice.classList.add("selection_text");
   comp_new_choice.textContent = `${computerSelection}`;
   comp_new_choice.setAttribute('id', 'comp_default');
   
   
   comp_choice_display.appendChild(comp_new_choice);
}



function player_win_text_display(playerSelection, computerSelection) {
   let text_display = document.querySelector(".text");
   let text_display_old = document.querySelector(".initial_msg");
   let remove_old = text_display.removeChild(text_display_old);

   let new_text_display = document.createElement('div');
   new_text_display.classList.add("initial_msg");
   new_text_display.textContent = `You win! ${playerSelection} wins over ${computerSelection} :)`;

   text_display.appendChild(new_text_display);
}

function player_loose_text_display(playerSelection, computerSelection) {
   let text_display = document.querySelector(".text");
   let text_display_old = document.querySelector(".initial_msg");
   let remove_old = text_display.removeChild(text_display_old);

   let new_text_display = document.createElement('div');
   new_text_display.classList.add("initial_msg");
   new_text_display.textContent = `You loose, ${playerSelection} looses agnist ${computerSelection} :(`;

   text_display.appendChild(new_text_display);
}

function player_tie_text_display(playerSelection) {
   let text_display = document.querySelector(".text");
   let text_display_old = document.querySelector(".initial_msg");
   let remove_old = text_display.removeChild(text_display_old);

   let new_text_display = document.createElement('div');
   new_text_display.classList.add("initial_msg");
   new_text_display.textContent = `You have both chosen ${playerSelection}. It's a tie...`;

   text_display.appendChild(new_text_display);
}

function player_match_win_display (playerScore,computerScore) {
   let text_display = document.querySelector(".text");
   let text_display_old = document.querySelector(".initial_msg");
   let remove_old = text_display.removeChild(text_display_old);

   let new_text_display = document.createElement('div');
   new_text_display.classList.add("initial_msg");
   new_text_display.textContent = ` Score is ${playerScore} to ${computerScore}. You win!`;
}

function player_match_loose_display (playerScore,computerScore) {
   let text_display = document.querySelector(".text");
   let text_display_old = document.querySelector(".initial_msg");
   let remove_old = text_display.removeChild(text_display_old);

   let new_text_display = document.createElement('div');
   new_text_display.classList.add("initial_msg");
   new_text_display.textContent = `Score is ${playerScore} to ${computerScore}. You loose :()`;
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










 

  



