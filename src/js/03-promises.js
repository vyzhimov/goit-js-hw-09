import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const inputFirstDelay = form.elements.delay;
const inputDelayStep = form.elements.step;
const inputAmount = form.elements.amount;

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const amount = Number(inputAmount.value);
  const firstDelay = Number(inputFirstDelay.value);
  const step = Number(inputDelayStep.value);
  let delay = 0;

  for (let position = 1; position <= amount; position++) {
    delay = firstDelay + step * (position - 1);
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
  }
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
