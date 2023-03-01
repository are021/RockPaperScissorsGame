/*
Global Variables
*/
let playerSelection;
let computerChoice;
let playerWins;
let computerWins;
let winner;


function firstLetterUpper(str){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function getWinner(player, computer){
   
    if (player > computer){
        return "You Won! Great Job!";
    }
    else if (player < computer){
        return "You Lost! Better Luck Next Time";
    }
    else{
        return "You Drew? Well That is Unfortunate";
    }
}
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
        const str = firstLetterUpper(playerSelection);
        console.log(`It's a Draw! Both picked ${str}!`);
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


function game() {
    playerWins = 0;
    computerWins = 0;
    for (let i = 0; i < 5 ; i++){ 
        playerSelection = prompt("Select one of the options \n 1) Rock \n 2) Paper \n 3) Scissors").toUpperCase();
        computerChoice = getComputerChoice(); //Get Computer Choice
        whoWon = playRound(playerSelection, computerChoice);
        
        whoWon == true ? playerWins++ : whoWon == false ? computerWins++ : null;
    }
    winner = getWinner(playerWins,computerWins);
    console.log(`The Computer Won ${computerWins} Times \nYou Won ${playerWins} Times`);
    console.log(winner);

}

console.log("Welcome to Jan Ken Pon (Rock Paper Scissors).");

game();