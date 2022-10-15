const body = document.querySelector("body")
const buttonRef = document.querySelector("button.change-color")
const colorRef = document.querySelector(".color")

buttonRef.addEventListener("click", changeColor)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function changeColor() {
  colorRef.textContent = getRandomHexColor()
  body.style.backgroundColor = colorRef.textContent
}