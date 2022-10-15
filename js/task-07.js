const inputRef = document.querySelector("#font-size-control")
const textRef = document.querySelector("#text")

textRef.style.fontSize = `${inputRef.value}px`

function changeSize() {
    const fontSize = Number(inputRef.value)
    textRef.style.fontSize = `${fontSize}px`
}

inputRef.addEventListener("input", changeSize)