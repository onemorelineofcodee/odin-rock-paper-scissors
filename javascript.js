
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
    let humanScore = 0 ,computerScore = 0 ;
    if (humanChoice == computerChoice){
        console.log(`it's a tie between ${humanChoice} and ${computerChoice}`);
    } else if (humanChoice=="rock" && computerChoice=="paper"){
        console.log("you lose!! paper beats rock");
    } else if (humanChoice=="rock" && computerChoice=="paper") {
        console.log("you win!! rock beats paper ");
    } else if (humanChoice=="paper" && computerChoice=="rock") {
        console.log("you win!! paper beats rock");
    } else if (humanChoice=="paper" && computerChoice=="scissor") {
        console.log("you lose!! scissor beats paper ");
    } else if (humanChoice=="scissor" && computerChoice=="rock") {
        console.log("you lose!! scissor beats rock");
    } else if (humanChoice=="scissor" && computerChoice=="paper") {
        console.log("you win!! scissor beats paper ");
    }    
    
}

playRound();

