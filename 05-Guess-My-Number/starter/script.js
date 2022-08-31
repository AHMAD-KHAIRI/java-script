'use strict';

/*
// how to select an html element in javascript: document.querySelector('<selectors>')
// querySelector selects the element of class = "message"
// in this case .message is referring to class = "message"
// if the element uses id then we can use #message
console.log(document.querySelector('.message'));

// Property .textContent selects and reads the text inside the element
// console.log(document.querySelector('.message').textContent);

// DOM Manipulation examples:
// By using the Property .textContent we can also replace/change the text inside the element --> This is DOM manipulation
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent); //outputs Correct Number!

// selects the element of class "number" and "score" and replaces the text inside the element
document.querySelector('.number').textContent = 13; // '?' is replaced with 13
document.querySelector('.score').textContent = 10; // 20 is replaced with 10

// we can insert a value inside the element
document.querySelector('.guess').value = 15;

// to display the value inside the input element with class "guess", we use the Property:value
console.log(document.querySelector('.guess').value);

*/

// 23.05.2022 @ 11.34PM
// addEventListener method. Example mouse click on a button
// syntax: addEventListener('<event type e.g. mouse events  such as click, dblclick')
// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
// });

//another example of event listener
// document.querySelector('.check').addEventListener('dblclick', function () {
//   console.log((document.querySelector('.score').textContent = 10));
// });

// 20.08.2022 @ 10.19 AM
// Added random number into the number input/class and save it in a variable
let secretNumber = Math.trunc(Math.random() * 20 + 1);

// 23.08.2022: declare a variable to store the starting score value instead of inside the DOM
let score = 20;

// 29.08.2022: declare a variable to store the highscore value
let highscore = 0;

// 31.08.2022: create a variable that holds a function to display the message and removing the duplicates
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// 31.08.2022: create a variable that holds a function to display the score and removing the duplicates
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// from 23.05.2022:
document.querySelector('.check').addEventListener('click', function () {
  // save the value in the variable guess and convert it to type Number
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // check if there is no value inside the input element using if else statement
  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    // 31.08.2022: the code above is commented out and replaced with the function displayMessage
    displayMessage('⛔ No Number!');
  }
  // Added else if on 20.08.2022
  // When guess is correct and player wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    // 31.08.2022: the code above is commented out and replaced with the function displayMessage
    displayMessage('🎉 Correct Number!');
    // 🎉 Win + ; to popup emoji selector in VS Code

    // reveals the secret number
    document.querySelector('.number').textContent = secretNumber;

    // change the background color
    document.querySelector('body').style.backgroundColor = '#60b347';

    // Increase the width size of the number box
    document.querySelector('.number').style.width = '30rem';

    // 29.08.2022: when user guesses the number correct, save and display the highest score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // Code added on 31.08.2022: When guess is wrong
  // Use of conditional ternary operator, syntax: condition ? exprIfTrue : exprIfFalse
  // Where in the code is the ternary operator?
  // --> guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      // 31.08.2022: the code above is commented out and replaced with the function displayMessage
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      // document.querySelector('.score').textContent = score;
      // 31.08.2022: the code above is commented out and replaced with the function displayScore
      displayScore(score);
    } else {
      // document.querySelector('.message').textContent = '👎You lost the game!';
      // 31.08.2022: the code above is commented out and replaced with the function displayMessage
      displayMessage('👎You lost the game!');
      // document.querySelector('.score').textContent = 0;
      // 31.08.2022: the code above is commented out and replaced with the function displayScore
      displayScore(0);
    }
  }

  // Added else if and nested if else on 23.08
  // When guess is too high
  // commented out on 31.08.2022 to make way for the code above
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  // document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  // document.querySelector('.message').textContent = '👎You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // // Added else if and nested if else on 23.08
  // // When guess is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '👎You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // Added else on 20.08
  // else document.querySelector('.message').textContent = 'Continue guessing...';
});

// 23.08.2022 @ 11.31 PM

// 28.08.2022 @ 9.06 AM Manipulating CSS Styles

// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)
// GOOD LUCK 😀

// My solution:
// document.querySelector('.again').addEventListener('click', function () {
//   document.location.reload();
// });
// My solution above is not the correct because when page is reloaded, the high scores will reset back to 0
// Remark: at this point, high score is not saved into any variable yet!

// Solution from udemy trainer:
// Step 1:
document.querySelector('.again').addEventListener('click', function () {
  // Step 2:
  score = 20;
  // secretNumber was changed from const to let
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  // Step 3:
  // Change the message text back to initial
  // document.querySelector('.message').textContent = 'Start guessing...';
  // 31.08.2022: the code above is commented out and replaced with the function displayMessage
  displayMessage('Start guessing...');
  // Change the number text back to initial
  document.querySelector('.number').textContent = '?';
  // Change the score text back to initial
  // document.querySelector('.score').textContent = score;
  // 31.08.2022: the code above is commented out and replaced with the function displayScore
  displayScore(score);
  // Change the guess value back to initial
  document.querySelector('.guess').value = '';

  // Step 4:
  // change the background color of the html body back to initial
  document.querySelector('body').style.backgroundColor = '#222';

  // Change the width size of the number div box back to initial
  document.querySelector('.number').style.width = '15rem';
});

// 31.08.2022 Refactoring our code: The DRY principle (Don't Repeat Yourself)
// To improve and eliminate duplicate code
