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

let scores;
let currentScore;
let activePlayer;
let gameIsStillPlaying;

// put all the initial conditions in a function
const init = function () {
  // store the scores of both players in an array (starts with 0 points for both players)
  scores = [0, 0];

  // set current Score at start
  currentScore = 0;

  // set active player to player 0 at start
  activePlayer = 0;

  // is the game still playing or not aka no winner yet? save the state in a bool condition (state variable)
  gameIsStillPlaying = true;

  // set high scores for all players back to 0
  scoreP0Element.textContent = 0;
  scoreP1Element.textContent = 0;

  // set current scores for all players back to 0
  currentScoreP0Element.textContent = 0;
  currentScoreP1Element.textContent = 0;

  // hide the dice at start of the game
  diceElement.classList.add('hidden');

  // remove the player--winner class from previous game
  P0Element.classList.remove('player--winner');
  P1Element.classList.remove('player--winner');

  // remove the active--player class from previous game (P1 always become the active player at start of the game hence add class to P0)
  P0Element.classList.add('player--active');
  P1Element.classList.remove('player--active');
};

// run the initial conditions function when page is reloaded
init();

// created a function for switching the active player.
// previously it was in the else statement of btnRollDice
const switchPlayer = function () {
  // select the active player and reset active player current score to 0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  // then switch active player to next player and start the current score with 0 (here we use the ternary operator)
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  // switch the active player under the html section class element. Toggle between player 0 and player 1. This changes the css styles for active player
  P0Element.classList.toggle('player--active');
  P1Element.classList.toggle('player--active');
};

// create a function that "rolls" the dice and generate a random number
btnRollDice.addEventListener('click', function () {
  // check if the game is still playing. If yes then add game functionality.If not disable game functionality
  if (gameIsStillPlaying) {
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

      // then select the score dynamically based on the active player / dynamicallly build id name and change the score
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
    // if dice = 1 then switch to the next player aka toggle between P0 and P1
    else {
      switchPlayer();
    }
  }
});

// Add the function to the hold button
btnHoldCurrent.addEventListener('click', function () {
  // check if the game is still playing. If yes then add game functionality. If not disable game functionality
  if (gameIsStillPlaying) {
    // 1. Add current score to the scores Array accoring to the active player
    scores[activePlayer] += currentScore;
    // if P1 then it will be like this: scores[1] = scores[1] + currentScore;

    // then replace the text of the high score of the active player in the html element id: <p class="score" id="score--0">43</p>
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if score is >= 100
    // If yes, game finishes
    if (scores[activePlayer] >= 100) {
      // set the game cannot be played anymore by changing the state
      gameIsStillPlaying = false;

      // add the hidden class and remove the dice from the html
      diceElement.classList.add('hidden');

      // then add the css class .player--winner to the active player to highlight who is the winner
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      // then remove the active player css class otherwise active player class and player winner class will be activated at the same time
      document
        .querySelector('.player--${activePlayer')
        .classList.remove('player--active');
    }

    // If not, game continues and switch to the next player
    else {
      switchPlayer();
    }
  }
});

// Add the function to the new game button and restore back to initial/starting conditions
btnNewGame.addEventListener('click', init);
