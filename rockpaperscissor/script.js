const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
 }

 function checkWinner(playerSelection, computerSelection){
   if (playerSelection === computerSelection) {
      return "Tie";
   } 
   else if (
         (playerSelection === "rock" && computerSelection === "scissors")
   ){
      return "Player";
   }
   else if (
      (playerSelection === "paper" && computerSelection === "rock")
   ){
      return "Player";
   }
   else if (
      (playerSelection === "scissors" && computerSelection === "paper")
   ){
      return "Player";
   }
   else {
      return "Computer";
   }
 }
 
 function playRound(playerSelection, computerSelection) {
   const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
       return `It's a tie! you both picked ${playerSelection}`
    } else if (result == "Player"){
       return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
   }
 }

 function getPlayerChoice(){
   let validatedImput = false;
   while(validatedImput == false){
      const choice = prompt('Rock Paper Scissors');
      if(choice == null){
         continue;
      }
      const choiceInLower = choice.toLowerCase();
      if (options.includes(choiceInLower)){
         validatedImput = true;
         return choiceInLower
      }
   }
 }

 function game(){
   let scorePlayer = 0;
   let scoreComputer = 0;
   for (let i = 0; i < 5; i++){
      const playerSelection = getPlayerChoice();
      const computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));
      console.log("--------------------");
      if (checkWinner(playerSelection, computerSelection) == "Player"){
      scorePlayer++
   }
      else if (checkWinner(playerSelection, computerSelection) == "Computer"){
         scoreComputer++
      }
}
   console.log("Game Over")
   if(scorePlayer > scoreComputer){
      console.log("Player was the winner")
   }
   else if(scoreComputer < scoreComputer){
      console.log("Computer was the winner")
   }
   else{
      console.log("It's a tie")
   }
 }

 game()
