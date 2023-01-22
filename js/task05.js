const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const viewAria = document.querySelector('#value');
let value = 0;

const decrementHandle = () => {
  value -= 1;
  viewAria.textContent = value;
};
const incrementHandle = () => {
  value += 1;
  viewAria.textContent = value;
};

decrementBtn.addEventListener('click', decrementHandle);
incrementBtn.addEventListener('click', incrementHandle);

// console.log(value);
