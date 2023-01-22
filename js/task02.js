const list = document.querySelector('ul#ingredients');
const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const markup = ingredients.map(ingredient => {
  const elem = document.createElement('li');
  elem.textContent = ingredient;
  elem.classList.add('item');
  return elem;
});

list.append(...markup);
