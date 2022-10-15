function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector("input")
const createRef = document.querySelector("[data-create]")
const destroyRef = document.querySelector("[data-destroy]")
const boxesRef = document.querySelector("#boxes")
// console.log(boxesRef)

inputRef.addEventListener("input", getInputValue)
createRef.addEventListener("click", createBoxes)

function getInputValue(event) {
  return event.currentTarget.value
}

function createBoxes(amount) {
  boxesRef.innerHTML = ""
  amount = Number(inputRef.value)
  
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${30 + 10 * i}px`
    box.style.height = `${30 + 10 * i}px`
    box.style.backgroundColor = `${getRandomHexColor()}`
    box.style.marginTop = `${15}px`
    boxesRef.appendChild(box)
  }
}

destroyRef.addEventListener("click", destroyBoxes)

function destroyBoxes() {
  inputRef.value = ""
  boxesRef.innerHTML = ""
}