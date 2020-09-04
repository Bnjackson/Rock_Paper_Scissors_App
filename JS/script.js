/*Rock Paper Scissors with UI using DOM manipulation
The round number will change with each round up to 5 when a winner will be declared.
Computer will generate random choice, player will make choice by clicking on one of three choices. 
Compare player and computer choice declare a round winner.
Player and computer image will update based on what the player/ computer choose. 
Scoreboard tracks the player and computers score.
Result will update to reflect score.
Player choice will be made by clicking on one of the 3 choices.
After 5 rounds the choices will be disappear.
New game button will reload page starting game again. 
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

let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

//playRound
function playRound () {
    let playerSelection = this.className;
    let computerSelection = computerChoice();
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
            document.getElementById('result-display').innerText = 'Paper beats rock. You win this round!';
            playerScore++;
            roundNumber++;
        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            document.getElementById('result-display').innerText = 'Scissors beat paper. You win this round!';
            ++playerScore;
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
    function updateScoreRound () {
        const changeRoundNumber = document.getElementById('number');
        changeRoundNumber.innerText = roundNumber;
        const playerScoreboard = document.getElementById('player-score');
        playerScoreboard.innerText = playerScore;
        const computerScoreboard = document.getElementById('computer-score');
        computerScoreboard.innerText = computerScore;
    }
    function roundFive () {
        if (roundNumber === 5) {
            declareWinner();
            function declareWinner() {
                if (playerScore > computerScore) {
                    document.getElementById('result-display').innerText = 'You won!';
                }
                else if (playerScore < computerScore) {
                    document.getElementById('result-display').innerText = 'You lost. Try again.'
                }
                else {
                    document.getElementById('result-display').innerText = 'You drew. Try again.';
                }
                document.getElementById('choices').remove();
            }
        }
        else {
            return;
        }
    }
    computerImage();
    roundResult();
    updateScoreRound();
    roundFive();
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

//NEW GAME
let buttonNewGame = document.getElementById('new-game');
buttonNewGame.addEventListener('click', () => {
    location.reload();
});