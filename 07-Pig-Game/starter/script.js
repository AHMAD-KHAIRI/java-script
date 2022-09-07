'use strict';

// select elements by id using 2 ways: querySelector or getElementById
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');

score0Element.textContent = 0;
score1Element.textContent = 0;

// hide the dice at start of the game
diceElement.classList.add('hidden');

const player = document.querySelector('.player');
const name = document.querySelector('.name');
const current = document.querySelector('.current');
const dice = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHoldCurrent = document.querySelector('.btn--hold');

// create an array of 6 dice images and save it in the dicePix variable
let dicePix = new Array(
  'dice-1.png',
  'dice-2.png',
  'dice-3.png',
  'dice-4.png',
  'dice-5.png',
  'dice-6.png'
);

// how to create a random number between 1 to 6
// let randomNumber = Math.trunc(Math.random() * 6 + 1);

// not sure about this:
const btns = document.querySelectorAll('.btn');
const playerActive = document.querySelector('player--active');

// const clickBtns = function () {
//   console.log('Button clicked!');
// };

// // use for loop to select multiple elements in the same class e.g. btn class
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener('click', clickBtns);
// }

const btnNew = function () {
  console.log('Button clicked!');
};

// create a function that rolls the dice randomly
const btnRoll = function () {
  console.log('Button clicked!');

  // how to generate a random number depending on the length of variable dicePix array
  let randomNumber = Math.trunc(Math.random() * dicePix.length);
  console.log(randomNumber);
  document.querySelector('.dice').src = dicePix[randomNumber];
};

const btnHold = function () {
  console.log('Button clicked!');
};

btnNewGame.addEventListener('click', btnNew);
btnRollDice.addEventListener('click', btnRoll);
btnHoldCurrent.addEventListener('click', btnHold);
