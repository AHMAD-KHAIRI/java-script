'use strict';

/*
// how to select an html element in javascript: document.querySelector('<selectors>')
// querySelector selects the element of class = "message"
// in this case .message is referring to class = "message"
// if the element uses id then we can use #message
console.log(document.querySelector('.message'));

// Property .textContent selects and reads the text inside the element
console.log(document.querySelector('.message').textContent);

// DOM Manipulation examples:
// By using the Property .textContent we can also replace/change the text inside the element --> This is DOM manipulation
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent); //outputs Correct Number!

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
document.querySelector('.check').addEventListener('dblclick', function () {
  console.log((document.querySelector('.score').textContent = 10));
});

document.querySelector('.check').addEventListener('click', function () {
  // save the value in the variable guess and convert it to type Number
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // check if there is a value inside the input element
  if (!guess) {
    document.querySelector('.message').textContent = '🛑No Number!';
  }
});
