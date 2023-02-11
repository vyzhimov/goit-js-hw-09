import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const firstDelay = form.elements.delay;
const delayStep = form.elements.step;
const amount = form.elements.amount;
const submitBtn = document.querySelector("button[type='Submit']");

console.log(firstDelay);
console.log(delayStep);
console.log(amount);
console.log(submitBtn);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
