
// Example
// Guess the number
function partOneA () {
  let answer, guess, guessNumber;
  answer = 7;
  guess = prompt("Guess a number between 1 and 10.");
  guessNumber = Number(guess);

  // 1. check if the number is equal to the answer
  if (guessNumber === answer) {
    // 2. if it is, set the message for correct.
    messageParagraph.innerHTML = `You guessed the number! It was ${answer}.`;
  } else {
    // 3. if not, set the message for wrong guess.
    messageParagraph.innerHTML = `You did not guess the number. Try again.`;
  }
}

// Try It!
// Try it with a different number
function partOneB () {
  // alert("Try it!");
  let answer, guess, guessNumber;
  answer = 3;
  guess = prompt("Guess a number between 1 and 10.");
  guessNumber = Number(guess);

  // 1. check if the number is equal to the answer
  if (guessNumber === answer) {

    // 2. if it is, set the message for correct.
    messageParagraph.innerHTML = `You guessed the number! It was ${answer}.`;
  } else {
    // 3. if not, set the message for wrong guess.
    messageParagraph.innerHTML = `You did not guess the number. Try again.`;
  }
}

// Example
// guess the number with a hint of higher or lower
function partTwoA () {
  let answer, guess, guessNumber;
  answer = 7;
  guess = prompt("Guess a number between 1 and 10.");
  guessNumber = Number(guess);

  // 1. check if the number is too low.
  if(guessNumber < answer) {
    // 2. if it is, set the message for too low.
    messageParagraph.innerHTML = `Your guess is too low. Try again.`;
  } else if (guessNumber > answer) {
    // 3. if not, set the message for too high.
    messageParagraph.innerHTML = `Your guess is too high. Try again.`;
  } else {
    // 4. if not, set the message for correct.
    messageParagraph.innerHTML = `You guessed the number! It was ${answer}.`;
  }

}

// Try it!
function partTwoB () {
  let answer, guess, guessNumber;
  answer = 7;
  guess = prompt("Guess a number between 1 and 10.");
  guessNumber = Number(guess);

  // 1. check if the number is too low.
  if (guessNumber < answer) {

    // 2. if it is, set the message for too low.
    messageParagraph.innerHTML = `You guessed too low. Try again.`;
  } else if (guessNumber > answer) {
    // 3. if not, set the message for too high.
    messageParagraph.innerHTML = `You guessed too high. Try again.`;
  }else {
    // 4. if not, set the message for correct.
   messageParagraph.innerHTML = `You guessed the number! It was ${answer}.`;
  }
}

// Example
// Mood checker
function partThreeA () {
  let color;
  color = prompt("What color describes your mood today?");
  // 1. check if the color is blue
  if(color === "blue") {
    // 2. give the message for blue
    messageParagraph.innerHTML = `Are you feeling down?`;
  // 3. check for the next color
  } else if(color === "yellow") {
    // 4. give the message for yellow
    messageParagraph.innerHTML = `You must being have a good day!`;
  } else {
    // 5. otherwise, ask for another color
    messageParagraph.innerHTML = `Try another color.`;
  }
}

// Try it!
// Try with some other colors. 
// For ideas check https://99designs.com/blog/tips/how-color-impacts-emotions-and-behaviors/
function partThreeB () {
  let color;
  color = prompt("What color describes your mood today?");
  // 1. check for your first color
  if (color === "purple") {

    // 2. give the message for this color
    messageParagraph.innerHTML = `Are you feeling relaxed today?`;

  // 3. check for the next color
  } else if (color === "green") {
    // 4. give the message for the next color
    messageParagraph.innerHTML = `Are you feeling good today?`;
  }else { 
  // 5. otherwise, ask for another color
  messageParagraph.innerHTML = `Try another color.`;
  }

}

// Example
// Rock Paper Scissors
function partFourA () {
  let playerOne, playerTwo;
  playerOne = prompt("Player One, choose rock, paper, or scissors.");
  playerTwo = prompt("Player Two, choose rock, paper, or scissors.");
  if(playerOne === "rock" && playerTwo === "paper"){
    messageParagraph.innerHTML = "Player Two wins!";
  } else if (playerOne === "scissors" && playerTwo === "rock") {
    messageParagraph.innerHTML = "Player Two wins!";
  } else {
    messageParagraph.innerHTML = "It's a tie!";
  }
  // NOTE: This is not a complete game. You need to figure out all the possible outcomes for it to work properly.
}

// Try it!
// Can you implement Rock Paper Scissors?
// How many options are there? There is 9 options without shortcut...7 with shortcut
// NOTE: If you miss some of the options, that's OK. 
// Try to catch as many as you can.
function partFourB () {
  // alert("Try it!");
  let player1, player2;
  player1 = prompt("Player 1, choose rock, paper or scissors.");
  player2 = prompt("Player 2, choose rock, paper or scissors.");
  if (player1 === "rock" && player2 === "scissors") {
    messageParagraph.innerHTML = "Player 1 Wins!!";
  } else if (player1 === "paper" && player2 === "rock") {
    messageParagraph.innerHTML = "Player 1 Wins!!";
  } else if (player1 === "scissors" && player2 === "paper") {
    messageParagraph.innerHTML = "Player 1 Wins!!";
  } else if (player2 === "rock" && player1 === "scissors") {
    messageParagraph.innerHTML = "Player 2 Wins!!";
  } else if (player2 === "paper" && player1 === "rock") {
    messageParagraph.innerHTML = "Player 2 Wins!!";
  } else if (player2 === "scissors" && player1 === "paper") {
    messageParagraph.innerHTML = "Player 2 Wins!!";
  } else if (player1 === player2) {
    messageParagraph.innerHTML = "It's a Draw!"
  }
  else {
    messageParagraph.innerHTML = "You didn't enter a valid choice.";
  }

}

