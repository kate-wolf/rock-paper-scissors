function computerPlay() {
  // create number with value of random number
  const number = Math.random();
  // if number <= .333 return rock
  if (number <= .333) return 'rock';
  // if number <= .667 return paper
  if (number <= .667) return 'paper';
  // if numbeer <= 1 return scissors
  if (number <= 1) return 'scissors';
}


function playRound(playerSelection, computerSelection) {
  // convert playerSelection into lowercase
  playerSelection = playerSelection.toLowerCase();
  // if input is invalid tell player
  if (!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors')) {
    return 'Invalid input! Enter only rock, paper, or scissors.';
  }
  // tell player what they picked
  console.log('You chose ' + playerSelection);
  // tell player what computer picked
  console.log('Computer chose ' + computerSelection);
  // if tie tell player
  if (playerSelection === computerSelection) return 'It\'s a tie! Try again';
  // when player wins return 'You won!'
  if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'You win!';
  }
  // when player loses return 'You lose!'
  if (playerSelection === 'scissors' && computerSelection === 'rock' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'rock' && computerSelection === 'paper') {
    return 'You lose!';
  }
}


// console.log(playRound(playerSelection, computerSelection));

function game() {
  let playerWinCount = 0;
  let computerWinCount = 0;
  for (let i = 0; i < 5; i++) {
    // your code here!
    const playerSelection = prompt('Choose rock, paper, or scissors: ');
    const computerSelection = computerPlay();
    let round = playRound(playerSelection, computerSelection);
    // if (round === 'Invalid input! Enter only rock, paper, or scissors.' || 'Enter a value!'){
    //   i--;
    // } else
    // if (round === 'It\'s a tie! Try again') {
    //   i--;
    // } else
    if (round === 'You win!') {
      playerWinCount++;
    } else
    if (round === 'You lose!') {
      computerWinCount++;
    }
    console.log(round);
 }
 if (playerWinCount > computerWinCount) return 'You win the game!';
 if (playerWinCount < computerWinCount) return 'You lose the game!';
 if (playerWinCount == computerWinCount) return 'The game is a tie!';
}

console.log(game());