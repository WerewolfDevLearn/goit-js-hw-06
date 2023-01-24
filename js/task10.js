const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const inputNumber = document.querySelector('#controls input');
const outputBox = document.querySelector('#boxes');

let amount = 0;

btnCreate.addEventListener('click', () => {
  createBoxes(amount);
});

btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const itemsContainer = document.createElement('div');
  itemsContainer.classList.add('container');
  amount = inputNumber.value;
  for (let i = 1; i <= amount; i += 1) {
    const item = document.createElement('div');
    item.classList.add('item');
    item.style.width = `${30 + 10 * i}px`;
    item.style.height = `${30 + 10 * i}px`;
    item.style.backgroundColor = getRandomHexColor();
    itemsContainer.append(item);
  }
  outputBox.append(itemsContainer);
  return outputBox;
}

function destroyBoxes() {
  const container = document.querySelector('div.container');
  container.remove();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
