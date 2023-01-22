const barRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('span#text');

barRef.addEventListener('input', () => {
  textRef.style.fontSize = `${barRef.value}px`;
});
