const body = document.querySelector('body');
const btnColorChange = document.querySelector('button.change-color');
const colorValue = document.querySelector('span.color');

btnColorChange.addEventListener('click', colorChange);

function colorChange() {
  const color = getRandomHexColor();
  colorValue.textContent = color;
  body.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
