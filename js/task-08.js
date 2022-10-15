const formRef = document.querySelector(".login-form")

formRef.addEventListener("submit",formSubmit)

function formSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const dataToSend = {}

    formData.forEach((value,key)=>{
        // dataToSend[key] = value
        dataToSend.email = event.currentTarget.elements.email.value
        dataToSend.password = event.currentTarget.elements.password.value

        if (dataToSend.password ==="" || dataToSend.email ===""){
            alert("Заполните все поля формы");
        } else {
            console.log(dataToSend)
        }
    })
    event.currentTarget.reset()
}