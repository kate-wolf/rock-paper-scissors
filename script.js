function computerPlay() {
  const number = Math.random();
  if (number <= .333) return 'rock';
  if (number <= .667) return 'paper';
  if (number <= 1) return 'scissors';
  
}


function playRound(playerSelection, computerSelection) {
  // convert playerSelection into lowercase
  playerSelection = playerSelection.toLowerCase();
  // if input is invalid tell player
  if (!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors')) {
    return 'Invalid input! Enter only rock, paper, or scissors.';
  }
  console.log('You chose ' + playerSelection);
  console.log('Computer chose ' + computerSelection);
  // if tie tell player
  if (playerSelection === computerSelection) return 'It\'s a tie! Try again';
  // when player wins return 'You won!'
  if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
    playerWinCount++;
  }
  // when player loses return 'You lose!'
  if (playerSelection === 'scissors' && computerSelection === 'rock' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'rock' && computerSelection === 'paper') {
    computerWinCount++;
  }
  result.innerText = `${playerWinCount} - ${computerWinCount}`;
  document.getElementById("results").appendChild(result);
  if(computerWinCount >= 5) {
    winner.innerText = "You lost!";
    document.getElementById("results").appendChild(winner);
  }
  if(playerWinCount >= 5) {
    winner.innerText = "You won!";
    document.getElementById("results").appendChild(winner);
  }
}


//   for (let i = 0; i < 5; i++) {
//     const playerSelection = prompt('Choose rock, paper, or scissors: ');
//     const computerSelection = computerPlay();
//     let round = playRound(playerSelection, computerSelection);
//     if (round === 'You win!') {
//       playerWinCount++;
//     } else
//     if (round === 'You lose!') {
//       computerWinCount++;
//     }
//     console.log(round);
//  }


const result = document.createElement("p");
const winner = document.createElement("p");
result.innerText = "0 - 0";
document.getElementById("results").appendChild(result);


const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");


let playerWinCount = 0;
let computerWinCount = 0;


rock.addEventListener("click", function() {
  playRound(this.id, computerPlay())
});
paper.addEventListener("click", function() {
  playRound(this.id, computerPlay())
});
scissors.addEventListener("click", function() {
  playRound(this.id, computerPlay())
});

// console.log(game());