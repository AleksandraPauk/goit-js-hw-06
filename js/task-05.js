const inputRef = document.querySelector("#name-input")
const nameRef = document.querySelector("#name-output")

inputRef.addEventListener("input", (event) => {
    if (event.currentTarget.value !== "") {
        nameRef.textContent = event.currentTarget.value
    } else {
        nameRef.textContent = "Anonymous"
    }
})