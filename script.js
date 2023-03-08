/*
Global Variables
*/
let playerSelection;
let computerChoice;
let playerWins = 0;
let computerWins = 0;
let winner;
let newGame = false;


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const div = document.querySelector(".textBox");
const body = document.querySelector("body");

/*
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
*/

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

function removeResetButton(newDiv){
    body.removeChild(newDiv);
    body.appendChild(div);
    
    newGame = false;
}

function createResetButton(){
    body.removeChild(div);

    const newDiv = document.createElement('div');
    newDiv.classList.add('newButtons');
    const newButton = document.createElement('button');
    newButton.textContent = "Reset";
    newButton.classList.add('new');
    newButton.addEventListener('click',() =>{
        removeResetButton(newDiv);
    });
    newDiv.appendChild(newButton);
    body.appendChild(newDiv);
    
}


function play(str){
    div.classList.remove("lost");
    if (newGame){
        createResetButton();
        return;
    }
    whoWon =  playRound(str,getComputerChoice());
    if (playerWins == 5 || computerWins == 5){
        winner = getWinner(playerWins,computerWins);
        div.classList.add("lost");
        div.textContent = (`The Computer Won ${computerWins} Times and \nYou Won ${playerWins} Times`);
        //div.textContent = winner;
        
        playerWins = 0;
        computerWins = 0;
        newGame = true;
    }
    else if (whoWon == -1){
        return; //Remove this Choice   
    }
    else{
        whoWon == true ? playerWins++ : computerWins++;
    }
    return;


}
rock.addEventListener('click',() =>{
    play("ROCK");
});
paper.addEventListener('click',() =>{
    play("PAPER");
});
scissors.addEventListener('click',() =>{
    play("SCISSORS");
});

//div.textContent("Welcome to Jan Ken Pon (Rock Paper Scissors).");
