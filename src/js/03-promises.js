import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const firstDelay = form.elements.delay;
const delayStep = form.elements.step;
const amount = form.elements.amount;

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  let amountPromises = Number(amount.value);
  let delay = Number(firstDelay.value);
  let step = Number(delayStep.value);
  let position = 0;
  let timerId = null;

  timerId = setInterval(() => {
    position += 1;
    if (position > amountPromises) {
      clearInterval(timerId);
      return;
    }
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }, step);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
