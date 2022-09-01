'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelector('.show-modal');
// using querySelector method has a limitation where if we have multiple elements using the same class, the querySelector method will only select the first element. So in this case to select all elements, we use querySelectorAll method
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

// we can use for loop to select multiple elements in the same class and do something with the element
for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].textContent);
}
