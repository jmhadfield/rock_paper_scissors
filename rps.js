
let playerCounter = 0;
let computerCounter = 0;


function computerPlay () {
    let number = (Math.floor(Math.random() * 3));
    if (number === 0) {
      return "Rock"
    } else if (number === 1) {
      return "Paper"
    } else if (number === 2) {
      return "Scissors"
    }
 }

 function playRound (playerSelection, computerSelection){ 
    if (playerSelection == "rock" && computerSelection == "Scissors") {
        playerCounter++;
        return "You did it, Rock beats Scissors!";
    } else if (playerSelection == "rock" && computerSelection === "Paper") {
        computerCounter++;
        return "You lost this time, Rock loses to Paper!";
    } else if (playerSelection == "rock" && computerSelection === "Rock") {
        return "Try Again as you both picked Rock, so it's a draw!";
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        computerCounter++;
        return "They blunt your scissors, the computer won!";
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
        playerCounter++;
        return "Nice one, you shredded that paper";
    } else if (playerSelection == "scissors" && computerSelection == "Scissors") {
        return "Scissor is the same as Scissor... so... it's a draw!";
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        playerCounter++;
        return "You covered that rock!";
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
        computerCounter++;
        return "You got shredded up by the computer!";
    } else if (playerSelection == "paper" && computerSelection == "Paper") {
        return "Two Papers. Boring. Do it again!";
    }
}

function reset () {
    playerCounter = 0;
    computerCounter = 0;
}


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', function(e) {
        playerSelection = (button.id);
        computerSelection = computerPlay();

        const roundResult = document.getElementById('result');
        roundResult.textContent = playRound (playerSelection, computerSelection);
        const playersCurrentScore = document.getElementById('pScore');
        playersCurrentScore.textContent = "Player's Score: " + playerCounter;
        const pcsCurrentScore = document.getElementById('pcScore');
        pcsCurrentScore.textContent ="Computer's Score: " + computerCounter; 

        if (playerCounter == 3) {
            playersCurrentScore.textContent = "Player's Score: " + playerCounter + " | You've Won!";
            reset();
        } else if (computerCounter == 3) {
            pcsCurrentScore.textContent ="Computer's Score: " + computerCounter + " | That means you lost"; 
            reset();
        } 
    });
});