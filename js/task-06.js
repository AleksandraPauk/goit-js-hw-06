const inputRef = document.querySelector("#validation-input")
console.log(inputRef)

function putSymbols(event) {
    // console.log(event.currentTarget.value)
    const inputTypeOfNumberRef = Number(inputRef.dataset.length)
    // console.log(typeof (inputTypeOfNumberRef))
    inputRef.classList.remove("valid")
    inputRef.classList.remove("invalid")

    if (event.currentTarget.value.length === inputTypeOfNumberRef) {
        inputRef.classList.add("valid")
    } else {
        inputRef.classList.add("invalid")
    } 
}

inputRef.addEventListener("blur", putSymbols)