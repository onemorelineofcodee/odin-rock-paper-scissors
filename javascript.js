let humanScore=0,computerScore=0;

function getHumanChoice(){
    let humanChoice = prompt("your move : ").toLowerCase();
    return humanChoice;
}
  
function getComputerChoice(){
    let choice =  Math.floor(Math.random()*3)+1 ;
    switch (choice) {
        case 1 :
            return "rock";
        case 2 :
            return "paper";
        case 3:
            return "scissor";
    }
}


function playRound(humanChoice=getHumanChoice(),computerChoice=getComputerChoice()){

    if (humanChoice == computerChoice){
        console.log(`it's a tie between ${humanChoice} and ${computerChoice}`);
        humanScore += 1,computerScore+=1;
    } else if (humanChoice=="rock" && computerChoice=="paper"){
        console.log("you lose!! paper beats rock");
        computerScore+=1;
    } else if (humanChoice=="rock" && computerChoice=="paper") {
        console.log("you win!! rock beats paper ");
        humanScore+=1;
    } else if (humanChoice=="paper" && computerChoice=="rock") {
        console.log("you win!! paper beats rock");
        computerScore+=1;
    } else if (humanChoice=="paper" && computerChoice=="scissor") {
        console.log("you lose!! scissor beats paper ");
        humanScore+=1;
    } else if (humanChoice=="scissor" && computerChoice=="rock") {
        console.log("you lose!! scissor beats rock");
        humanScore+=1;
    } else if (humanChoice=="scissor" && computerChoice=="paper") {
        console.log("you win!! scissor beats paper ");
        computerScore+=1;
    }    
    
}

function displayScore(){
    console.log(`current score : you :- ${humanScore} vs ${computerScore}`);
}

function playGame(){
    console.log("hey ready to play !! here we go ");
    displayScore();

    playRound();
    displayScore();
    
    playRound();
    displayScore();
    
    playRound();
    displayScore();
    
    playRound();
    displayScore();

    playRound();
    console.log(`Final score : you :- ${humanScore} vs computer :- ${computerScore}`);

    if (humanScore==computerScore){
        console.log("it's a tie !!");
    } else if(humanScore > computerScore){
        console.log("you won !!");
    } else {
        console.log("you lose !! better luck next time");
    }
}

playGame();

