const list = document.querySelector('ul#categories');

const numberCategories = list.childElementCount;

const listChilds = document.querySelectorAll('li.item');

listChilds.forEach(child => {
  console.log('Category:', child.querySelector('h2').textContent);
  console.log('Elements:', child.querySelectorAll('li').length);
});
