const drinkForm = document.querySelector('#newDrinkForm')
const submitButton = document.querySelectorAll('input')
const imagesContainer = document.querySelector('#images-container')

drinkForm.addEventListener("submit", function(event) {
  event.preventDefault()
  const h2 = document.createElement('h2')
  const img = document.createElement('img')
  const name = document.querySelector('#drink-name').value
  const url = document.querySelector('#drink-url').value
  h2.innerText = name
  img.src = url
  imagesContainer.appendChild(h2,img)
  document.querySelector('#drink-name').value = ""
  document.querySelector('#drink-url').value = ""
})