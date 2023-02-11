import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const firstDelay = form.elements.delay;
const delayStep = form.elements.step;
const amount = form.elements.amount;
const submitBtn = document.querySelector("button[type='Submit']");

submitBtn.addEventListener('submit', event => {
  event.preventDefault();
  let amountPromises = amount.value;
  let position = 1;
  let delay = firstDelay.value;
  let step = delayStep.value;
  let timerId = null;

  console.log(amountPromises, delay, step);

  // timerId = setInterval(() => {
  //   if (position === amount) {
  //     clearInterval(timerId);
  //     return;
  //   }
  //   createPromise(position, delay)
  //     .then(({ position, delay }) => {
  //       Notiflix.Notify.success(
  //         `✅ Fulfilled promise ${position} in ${delay}ms`
  //       );
  //     })
  //     .catch(({ position, delay }) => {
  //       Notiflix.Notify.failure(
  //         `❌ Rejected promise ${position} in ${delay}ms`
  //       );
  //     });
  // }, step);
  // position += 1;
});

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
