const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector(".gallery")
const elements = images.map((image) => 
  `<li class="gallery__item"><img class="gallery__img" src="${image.url}" alt="${image.alt}"></li>`)
  .join("")
galleryRef.insertAdjacentHTML("afterbegin", elements)

// Another approach
// const elements = images.map((image) => {
//   const itemRef = document.createElement("li")
//   itemRef.classList.add("gallery__items")

//   const imgRef = document.createElement("img")
//   imgRef.src = image.url
//   imgRef.alt = image.alt
//   imgRef.width = 200
//    imgRef.classList.add("gallery__img")
//   itemRef.appendChild(imgRef)
//   console.log(itemRef)

//   return itemRef
// })
// galleryRef.append(...elements)