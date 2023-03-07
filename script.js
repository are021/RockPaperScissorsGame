/*
Global Variables
*/
let playerSelection;
let computerChoice;
let playerWins;
let computerWins;
let winner;


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const div = document.querySelector(".textBox");

function checkValidSelection(){

    while (true){
        let input = prompt("Select one of the options \n 1) Rock \n 2) Paper \n 3) Scissors");
        let temp = input.toUpperCase();

        if (temp == "ROCK" || temp == "SCISSORS" || temp == "PAPER"){
            return temp;
        }
        console.log(`${input} IS NOT A VALID INPUT, TRY AGAIN!`);
        alert(`${input} IS NOT A VALID INPUT, TRY AGAIN!`);
    }
}

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
        div.textContent = (`It's a Draw! Both picked ${str}! \n\tTry Again!`);
        
        return -1;
    }
    // Rock
    else if (playerSelection == "ROCK"){
        if (computerSelection == "PAPER"){
            div.textContent = ("You Lose! Paper beats Rock");
            return false;
        }
        else{
            div.textContent = ("You Win! Rock Beats Scissors");
            return true;
        }
    }
    //Paper
    else if (playerSelection == "PAPER"){
        if (computerSelection == "SCISSORS"){
            div.textContent = ("You Lose! Scissors beats Paper");
            return false;
        }
        else{
            div.textContent = ("You Win! Paper Beats Rock");
            return true;
        }
    }
    //Scissors
    else{
        if (computerSelection == "ROCK"){
            div.textContent = ("You Lose! Rock beats Scissors");
            return false;
        }
        else{
            div.textContent = ("You Win! Scissors Beats Paper");
            return true;
        }
    }
    
}

console.log("Welcome to Jan Ken Pon (Rock Paper Scissors).");


rock.addEventListener('click',() =>{
    playRound('ROCK',getComputerChoice());
});
paper.addEventListener('click',() =>{
    playRound('PAPER',getComputerChoice());
});
scissors.addEventListener('click',() =>{
    playRound('SCISSORS',getComputerChoice());
});





/*
function game() {
    playerWins = 0;
    computerWins = 0;
    for (let i = 0; i < 5 ; i++){ 
        playerSelection = checkValidSelection();
        computerChoice = getComputerChoice(); //Get Computer Choice
        whoWon = playRound(playerSelection, computerChoice);
        
        if (whoWon == -1){
            i--; //Remove this Choice   
        }
        else{
            whoWon == true ? playerWins++ : computerWins++;
        }
    }
    winner = getWinner(playerWins,computerWins);
    console.log(`The Computer Won ${computerWins} Times \nYou Won ${playerWins} Times`);
    alert(`The Computer Won ${computerWins} Times \nYou Won ${playerWins} Times`);
    console.log(winner);
    alert(winner);

}
*/


//game();