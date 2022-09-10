'use strict';

// select elements by id using 2 ways: querySelector or getElementById
// PO : Player 0, P1 : Player 1
const P0Element = document.querySelector('.player--0');
const P1Element = document.querySelector('.player--1');
const scoreP0Element = document.querySelector('#score--0');
const scoreP1Element = document.getElementById('score--1');
const currentScoreP0Element = document.getElementById('current--0');
const currentScoreP1Element = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
// resumed code on 10.09.2022
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHoldCurrent = document.querySelector('.btn--hold');

// display scores as 0 when first starting the game
scoreP0Element.textContent = 0;
scoreP1Element.textContent = 0;

// hide the dice at start of the game
diceElement.classList.add('hidden');

// store the scores of both players in an array (starts with 0 points for both players)
const scores = [0, 0];

// set current Score at start
let currentScore = 0;

// set active player to player 0 at start
let activePlayer = 0;

// create a function that "rolls" the dice and generate a random number
btnRollDice.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6 + 1);
  console.log(dice);

  // 2. Display dice
  // first, remove the hidden class and make the dice visible
  diceElement.classList.remove('hidden');
  // second, select the src in html and dynamically change the dice number picture according to the random number generated e.g. dice-1.png
  diceElement.src = `dice-${dice}.png`;

  // 3. Check if dice != 1. If true, add the dice number to the current score. If false, reset current score to 0 and switch to next player
  if (dice !== 1) {
    // add dice to current score
    currentScore += dice;
    // select the score dynamically based on the active player / dynamicallly build id name and change the score
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // select the active player and reset active player current score to 0
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    // then switch active player to next player and start the current score with 0 (here we use the ternary operator)
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    // switch the active player under the html section class element. Toggle between player 0 and player 1. This changes the css styles for active player
    P0Element.classList.toggle('player--active');
    P1Element.classList.toggle('player--active');
  }
});
