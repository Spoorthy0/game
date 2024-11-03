//NORMAL METHOD
/*const getUserChoice = userInput =>{ 
    userInput= userInput.toLowerCase();
    if(userInput==="rock" || userInput==="paper" ||userInput==="scissors"){
      return userInput;
    }
    else{
      console.log("Error!!")
    }
  
  }
   function getComputerChoice(){
    random=Math.floor(Math.random()*3)
    if(random==0){
      return "rock"
    }
    else if(random==1){
      return "paper"
    }
    else if(random==2){
      return "scissors"
    }
    else{
      console.log("Invalid")
    }
   }
  
   function determineWinner(userChoice,computerChoice){
      if(userChoice===computerChoice){
        return "The game is tie"
      }
      if(userChoice==="rock"){
        if(computerChoice==="paper"){
          return "Computer has won the game"
        }
        else{
          return "You have won the game"
        }
      }
      else if(userChoice==="paper"){
        if(computerChoice==="scissors"){
         return "Computer has won the game"
        }
        else{
          return "You have won the game"
        }
  }
  else if(userChoice==="scissors"){
        if(computerChoice==="rock"){
         return "Computer has won the game"
        }
        else{
          return "You have won the game"
        }
  }
   }
   function playGame(){
    const userChoice= getUserChoice("scissors");
    let computerChoice= getComputerChoice();
     console.log("You threw: "+userChoice);
     console.log("The computer threw: "+computerChoice)
     console.log(determineWinner(userChoice,computerChoice))
   }
   playGame();
   */
   const container=["rock","paper","scissors"]
   const playerInput=document.getElementById("playerinput")
   const computerInput=document.getElementById("computerInput")
   const resultDisplay=document.getElementById("resultDisplay")
   const playerScoreDisplay=document.getElementById("playerScoreDisplay")
   const computerScoreDisplay=document.getElementById("computerScoreDisplay")
   const final=document.getElementById("final")
   let playerScore=0;
   let computerScore=0;
   let attempt=0;  
   function playGame(playerChoice){
    const computerChoice=container[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
    let result="";
    if(playerChoice===computerChoice){
      result="It's a tie!!"
    }
    else{
      switch(playerChoice){
        case "rock":
        result=(computerChoice==="paper")? "Computer Won!!" : "You have won🏆!!";
        break;
        case "paper":
          result=(computerChoice==="scissors")? "Computer Won!!":"You have won🏆!!";
          break;
        case "scissors":
          result=(computerChoice==="rock")? "Computer Won!!" : "You have won🏆!!";
          break; 
      }
    }
    playerInput.textContent=`PLAYER: ${playerChoice}`;
    computerInput.textContent=`COMPUTER: ${computerChoice}`;
    resultDisplay.textContent=`${result}`;
    switch(result){ 
      case "You have won🏆!!":
        playerScore++;
        attempt++;
        playerScoreDisplay.textContent=`PlayerScore: ${playerScore}`;
        break;
      case "Computer Won!!":
        computerScore++;
        attempt++
        computerScoreDisplay.textContent=`ComputerScore: ${computerScore}`; 
        break;
      case "It's a tie!!":
        attempt++; 
        break;  
    }
    final.textContent=`Total Attempts: ${attempt}`;
  }
 
   

  