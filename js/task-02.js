const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments"
];

const ul = document.querySelector("#ingredients"); 

const itemsInList = ingredients.map(ingredient => {
  const li = document.createElement("li"); 
  li.textContent = ingredient; 
  li.classList.add("item"); 
  
  return li;
});

ul.append(...itemsInList);




