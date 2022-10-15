const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach((item) => {
  console.log(item)
  const liNewRef = document.createElement("li")
  liNewRef.classList.add("item")
  liNewRef.textContent = `${item}`
  const ingredientsRef = document.querySelector("#ingredients")
  ingredientsRef.append(liNewRef)
})
