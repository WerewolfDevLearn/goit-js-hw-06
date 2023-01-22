const inputField = document.querySelector('input#name-input');
const outputField = document.querySelector('span#name-output');
console.log(inputField);

function getInputValue() {
  outputField.textContent = inputField.value === '' ? 'Anonymous' : inputField.value;
}

inputField.addEventListener('input', getInputValue);
