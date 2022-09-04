'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelector('.show-modal');
// using querySelector method has a limitation where if we have multiple elements using the same class, the querySelector method will only select the first element. So in this case to select all elements, we use querySelectorAll method
const btnsOpenModal = document.querySelectorAll('.show-modal');

// console.log(btnsOpenModal);

// Note: after the closeModal function, we also created the openModal function
// The variable openModal is inserted in the for loop condition
const openModal = function () {
  // console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// we can use for loop to select multiple elements in the same class and do something with the element
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);

  // console.log(btnsOpenModal[i].textContent);
  // btnsOpenModal[i].addEventListener('click', function () {
  // console.log(btnsOpenModal[i].textContent + ', Button clicked');

  // Note: In the 2 lines of code below, the hidden class does not starts with a '.' because we do not want to remove the entire class
  // modal.classList.remove('hidden');
  // overlay.classList.remove('hidden');
  // }
}

// Note: the btnCloseModal class is actually referring to the 'x' button to close the 'popup window'
// in actual fact, the 'x' button is actually just a character entity representing 'x' button
// a function is then created to hide or show/add the class back to the CSS styling
// btnCloseModal.addEventListener('click', function () {
//   console.log(btnCloseModal.textContent + ' button clicked');
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// Note: we can also 'close' the 'popup window' by clicking on the background aka overlay area
// overlay.addEventListener('click', function () {
//   console.log((overlay.textContent = 'Overlay/Background clicked'));
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// Note: to implement the DRY-Don't Repeat Yourself principle in this case for 2 addEventListeners for 2 classes: btnCloseModal and overlay (in this case the modal and overlay 'hidden' is repeated), we can create a single function like below:
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Note: closeModal is inserted instead of a function () because we want the closeModal function to be run after the 'click'
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// 81. Handling an "Esc" Keypress Event. Coded on 04092022
// Keyboard event are called Global event
// Examples of keyboard events:
// 'keydown' = is fired when key is pressed down on the keyboard.
// 'keypress' = is fired continuously as long as the key is pressed on the keyboard.
// 'keyup' = is fired when we lift our finger off the key on the keyboard.

document.addEventListener('keydown', function (event) {
  // console.log('A key was pressed!');

  // When a keydown event happens, JS will call this function and pass in the 'event' object as an argument
  // We then use console.log to find out the key that we would like to pass in e.g 'Escape' key
  // console.log(event.key);

  // Then we do an if statement to trigger a condition when the 'Escape' key has been pressed
  // Also, if the modal does not contain the hidden class, then close the modal by calling the closeModal function
  // we use && to include 2 conditions in one if statement
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    // console.log('Esc key was pressed!');
    closeModal();
  }
});
