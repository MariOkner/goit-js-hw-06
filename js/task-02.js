const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const potatoesItemEl = document.createElement('li');
potatoesItemEl.textContent = 'Potatoes';
potatoesItemEl.classList.add('item');
console.log(potatoesItemEl);

const mushroomsItemEl = document.createElement('li');
mushroomsItemEl.textContent = 'Mushrooms';
mushroomsItemEl.classList.add('item');
console.log(mushroomsItemEl);

const garlicItemEl = document.createElement('li');
garlicItemEl.textContent = 'Garlic';
garlicItemEl.classList.add('item');
console.log(garlicItemEl);

const tomatosItemEl = document.createElement('li');
tomatosItemEl.textContent = 'Tomatos';
tomatosItemEl.classList.add('item');
console.log(tomatosItemEl);

const herbsItemEl = document.createElement('li');
herbsItemEl.textContent = 'Herbs';
herbsItemEl.classList.add('item');
console.log(herbsItemEl);

const condimentsItemEl = document.createElement('li');
condimentsItemEl.textContent = 'Condiments';
condimentsItemEl.classList.add('item');
console.log(condimentsItemEl);

const ingredientsListEl = document.querySelector('ul');
// console.log(ingredientsListEl);
ingredientsListEl.append(potatoesItemEl, mushroomsItemEl, garlicItemEl, tomatosItemEl, herbsItemEl, condimentsItemEl);
console.log(ingredientsListEl);