const categoriesRef = document.querySelector("#categories")
const numberOfCategoriesRef = categoriesRef.querySelectorAll("ul")
console.log("Number of categories:", numberOfCategoriesRef.length)

const topicRef = document.querySelectorAll("h2")
topicRef.forEach((category) => {
    console.log("Category:", category.textContent)
    const elementsRef = category.nextElementSibling
    console.log("Elements:", elementsRef.children.length)
})



