'use strict';

// how to select an html element in javascript: document.querySelector('<selectors>')
// queryselector selects the element of class = "message"
// in this case .message is referring to class = "message"
console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent); // Property .textContent selects the text inside the element
