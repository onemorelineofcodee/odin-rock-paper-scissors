let humanScore=0,computerScore=0;

let output = document.querySelector(".output");
let scoreBoard = document.querySelector(".scoreBoard");

/* function getHumanChoice(){
    let humanChoice = prompt("your move : ").toLowerCase();
    return humanChoice;
} */
  
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


function playRound(humanChoice,computerChoice=getComputerChoice()){

    if (humanScore == 5 || computerScore == 5){
        output.textContent = `${humanScore>computerScore ? `you won by ${humanScore - computerScore} humanScore is ${humanScore} computerScore is ${computerScore} points` : 
                                `you lost by ${computerScore - humanScore} humanScore is ${humanScore} computerScore is ${computerScore} points` }`;
        scoreBoard.textContent = "";
        return ;
    }

    if (humanChoice == computerChoice){
        output.textContent = `it's a tie between ${humanChoice} and ${computerChoice}`;
        
    } else if (humanChoice=="rock" && computerChoice=="paper"){
        output.textContent = "you lose!! paper beats rock";
        computerScore+=1;
    } else if (humanChoice=="rock" && computerChoice=="paper") {
        coutput.textContent = "you win!! rock beats paper ";
        humanScore+=1;
    } else if (humanChoice=="paper" && computerChoice=="rock") {
        output.textContent = "you win!! paper beats rock";
        humanScore+=1;
    } else if (humanChoice=="paper" && computerChoice=="scissor") {
        output.textContent =  "you lose!! scissor beats paper ";
        computerScore+=1;
    } else if (humanChoice=="scissor" && computerChoice=="rock") {
        output.textContent =  "you lose!! scissor beats rock";
        computerScore+=1;
    } else if (humanChoice=="scissor" && computerChoice=="paper") {
        output.textContent = "you win!! scissor beats paper ";
        humanScore+=1;
    }   
    
    scoreBoard.textContent = ` you = ${humanScore}  vs machine = ${computerScore}`;
    
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

let input = document.querySelectorAll(".imager > img");
  
input.forEach((item)=>{
    item.addEventListener("mousedown",(e)=>{
        item.classList.add("addBorder");
    });

    item.addEventListener("mouseup",(e)=>{
        item.classList.remove("addBorder");
        playRound(e.target.id);
        //play round 
        //display score


    })
});
    

