import Notiflix from 'notiflix';

console.log('hello');
const refs = {
  form: document.querySelector('.form'),
};

console.log(refs.form);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
