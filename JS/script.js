/*Rock Paper Scissors with UI using DOM manipulation
The round number will change with each round up to 5 when a winner will be declared.
Computer will generate random choice, player will make choice by clicking on one of three choices. 
Compare player and computer choice declare a winner.
Player and computer image will update based on what the player computer choice. 
Scoreboard tracks the player and computers score.
Result will display last round result.
Player choice will be made by clicking on one of the 3 choices.
After 5 rounds a button will appear to start a new game.
*/

//Start game
let newGame = document.getElementById('new-game');
newGame.addEventListener('click', startGame);

function startGame () { 
    let result = document.getElementById('result-display');
    result.innerText = 'Make your choice. It\'s best to 5.';
    playerInput()
}

function playerInput () {
    let choice = document.getElementsByClassName('images');
    for (let i = 0; i < choice.length; i++) {
        choice[i].addEventListener('click', playerChoice);
        }
        function playerChoice(e) {
            if (e.target.classList.contains('rock')) {
                let playerSelection = 'rock';
                playRound();
            }
            else if (e.target.classList.contains('paper')){
                let playerSelection = 'paper';
                playRound();
            }
            else if (e.target.classList.contains('scissors')){
                let playerSelection = 'scissors';
                playRound();
            }
            else {
                console.log('ERROR - Player Choice')
            }
        }
        
}


//Computer choice 
function computerChoice () {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    }
    else if (randomNumber === 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

//Player choice


//Compare computer and player choice 
function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        console.log('Draw')
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log('win')
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        console.log('win')
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('win')
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('lose')
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('lose')
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('lose')
    }
    else {
        console.log('ERROR - Playround')

    }
}























/*
//Prompt asking for user choice
function playerChoice() {
    return prompt('Rock, Paper, Scissors. Pick one.');
}

//Random computer choice - Number generated 0 - 2 then comparision to generate the result. 
function computerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0) {
        return 'ROCK';
    }else if(randomNumber === 1){
        return 'PAPER';
    }else {
        return 'SCISSORS';
    }
}

//Compares user and computer result, returns number 1 for win, 0 for loss, 2 for draw and 3 for an error. Also prints result.
function playRound(playerSelection, computerSelection) {
    let playerUpper = playerSelection.toUpperCase();
    if (playerUpper == 'ROCK' && computerSelection === 'SCISSORS') {
        console.log("Rock beats scissors, you win!");
        return 1;
    }
    else if (playerUpper === 'PAPER' && computerSelection === 'ROCK') {
        console.log("Paper beats rock, you win!");
        return 1;
    }
    else if (playerUpper === 'SCISSORS' && computerSelection === 'PAPER') {
        console.log("Scissors beats Paper, you win!");
        return 1;
    }
    else if (playerUpper === 'SCISSORS' && computerSelection === 'ROCK') {
        console.log("Scissors beats Paper, you loose!");
        return 0;
    }
    else if (playerUpper === 'ROCK' && computerSelection === 'PAPER') {
        console.log("Paper beats Rock, you loose!");
        return 0;
    }
    else if (playerUpper === 'PAPER' && computerSelection === 'SCISSORS') {
        console.log("Scissors beats Paper, you win!");
        return 0;
    }
    else if (playerUpper === computerSelection) {
        console.log('Its a tie!');
        return 2;
    }
    else {
        console.log('ERROR: Check spelling, only Rock, Paper, Scissors');
        return 3;
    } 
}

//Loop for 5 rounds, calculate score and determine winner.
game();
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++) {
        let playerSelection = playerChoice();
        let computerValue = computerChoice();
        let result = playRound(playerSelection, computerValue);
        if (result === 1) {
            playerScore++;
        }
        else if (result === 0) {
            computerScore++;
        }
        else if (result === 2) {
            playerScore++;
            computerScore++;
        }
        else if (result === 3) {
            i--;
        }
    }
    determineWinner();
    function determineWinner() {
        if(playerScore > computerScore) {
            console.log('You won with ' + playerScore +' to ' + computerScore + '.');
        }
        else if(playerScore < computerScore) {
            console.log('You lost with ' + playerScore +' to ' + computerScore + '.');
        }
        else {
            console.log('Its a draw ' + playerScore +' to ' + computerScore + '.');    
        }
    } 
}
*/