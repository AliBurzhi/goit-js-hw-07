const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// const liList = document.createElement("li");
// const parentContainer = document.getElementById("ingredients");
// parentContainer.append(liList);

// ingredients.forEach(ingredient => {
//   const liItem = document.createElement("li");
//   liItem.textContent = ingredient;
// });

const getListId = document.querySelector('#ingredients');
const createListItem = ingredients.map(ingredient => {
  const itemEl = document.createElement('li'); itemEl.textContent = ingredient;
  return itemEl;
});
getListId.append(...createListItem);