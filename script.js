
/*
    Randomly Generate a choice for the computer
    1 - Rock
    2 - Paper
    3 - Scissors
*/
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3)+1;
    switch(computerChoice){
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSORS";
    }
}
/*
    Return True if Player Wins
    Return False if Computer Wins
    Return -1 if Draw
*/
function playRound(playerSelection , computerSelection){
    
    if (playerSelection == computerSelection){
        console.log(`It's a Draw! Both picked ${playerSelection}`);
        return -1;
    }
    // Rock
    else if (playerSelection == "ROCK"){
        if (computerSelection == "PAPER"){
            console.log("You Lose! Paper beats Rock");
            return false;
        }
        else{
            console.log("You Win! Rock Beats Scissors");
            return true;
        }
    }
    //Paper
    else if (playerSelection == "PAPER"){
        if (computerSelection == "SCISSORS"){
            console.log("You Lose! Scissors beats Paper");
            return false;
        }
        else{
            console.log("You Win! Paper Beats Rock");
            return true;
        }
    }
    //Scissors
    else{
        if (computerSelection == "ROCK"){
            console.log("You Lose! Rock beats Scissors");
            return false;
        }
        else{
            console.log("You Win! Scissors Beats Paper");
            return true;
        }
    }
    
}

const playerSelection = "ROCK";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));