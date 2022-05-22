'use strict';

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

// to display the value inside the input element with class "guess", we use the Property value
console.log(document.querySelector('.guess').value);

// we can insert a value inside the element
document.querySelector('.guess').value = 15;
