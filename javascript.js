
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


function playRound(humanChoice=getHumanChoice(),ComputerChoice=getComputerChoice()){
    let humanScore = 0 ,computerScore = 0 ;
    if (humanChoice == ComputerChoice){
        console.log(`it's a tie between ${humanChoice} and ${ComputerChoice}`);
    } 
    
}

