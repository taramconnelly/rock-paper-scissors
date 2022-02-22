var choices = ["rock", "paper", "scissors"];
function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
  
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === computerSelection) {
    return "it's a tie! Tie!";

}  else if ((playerSelection.toLowerCase()==="rock" && computerSelection==="scissors") || (playerSelection.toLowerCase() ==="paper" && computerSelection === "rock") || (playerSelection.toLowerCase() ==="scissors" && computerSelection === "paper")) {
    humanScore++; 
    return "you win, winna!";
  
}  else if ((playerSelection.toLowerCase()==="scissors" && computerSelection==="rock") || (playerSelection.toLowerCase() ==="rock" && computerSelection === "paper") || (playerSelection.toLowerCase() ==="paper" && computerSelection === "scissors")) {
   computerScore++;
    return "you lose, sucka!";
  
} else {
    return "hey man you typed your input wrong. check yo'self!" }   
}

let computerScore = 0;
let humanScore = 0;

  for (var i =0; i<=5; i++){
    var playerSelection = prompt ('Please choose "rock", "paper" or "scissors"');
    const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))
console.log(humanScore + " is your total score, bud. Noice!");
}
  
