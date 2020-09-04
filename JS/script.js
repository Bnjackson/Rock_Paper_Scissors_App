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

//Computer choice 
computerChoice();
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

//playerchoice
const playerRock = document.querySelector('.rock');
playerRock.addEventListener('click', playRound, imageChange());
const playerPaper = document.querySelector('.paper');
playerPaper.addEventListener('click', playRound, imageChange());
const playerScissors = document.querySelector('.scissors');
playerScissors.addEventListener('click', playRound, imageChange());

//playRound
function playRound () {
    let playerScore = 0;
    let computerScore = 0;
    let roundNumber = 1;
    let playerSelection = this.className;
    console.log(playerSelection);
    let computerSelection = computerChoice();
    console.log(computerSelection);
    function computerImage () {
        if (computerSelection === 'rock') {
            document.getElementById('computer-selection').src = '/images/rock.jpg';
        }
        else if (computerSelection === 'paper') {
            document.getElementById('computer-selection').src = '/images/paper.jpg';
        }
        else if (computerSelection === 'scissors') {
            document.getElementById('computer-selection').src = '/images/scissors.jpg';
        }
    }
    function roundResult () {
        if (playerSelection === computerSelection) {
            document.getElementById('result-display').innerText = 'Draw.';
            roundNumber++;
        }
        else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            document.getElementById('result-display').innerText = 'Rock beats scissors. You win this round!';
            playerScore++;
            roundNumber++;
        }
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
            document.getElementById('result-display').innerText = 'Paper beats scissors. You win this round!';
            playerScore++;
            roundNumber++;
        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            document.getElementById('result-display').innerText = 'Scissors beat paper. You win this round!';
            playerScore++;
            roundNumber++;

        }
        else if (computerSelection === 'rock' && playerSelection === 'scissors') {
            document.getElementById('result-display').innerText = 'Rock beats scissors. You lose this round!';
            computerScore++;
            roundNumber++;
        }
        else if (computerSelection === 'paper' && playerSelection === 'rock') {
            document.getElementById('result-display').innerText = 'Paper beats rock. You lose this round!';
            computerScore++;
            roundNumber++;
        }
        else if (computerSelection === 'scissors' && playerSelection === 'paper') {
            document.getElementById('result-display').innerText = 'Scissors beat paper. You lose this round!';
            computerScore++;
            roundNumber++;
        }
        else {
            console.log('ERROR - roundwinner');
        }
    }
    computerImage();
    roundResult();

}

//IMAGE CHANGE
function imageChange() {
    const playerRock = document.querySelector('.rock');
    playerRock.addEventListener('click', () => {
        document.getElementById('player-selection').src = '/images/rock.jpg'});
    const playerPaper = document.querySelector('.paper');
    playerPaper.addEventListener('click', () => {
        document.getElementById('player-selection').src = '/images/paper.jpg'});
    const playerScissors = document.querySelector('.scissors');
    playerScissors.addEventListener('click', () => {
        document.getElementById('player-selection').src = '/images/scissors.jpg'});
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