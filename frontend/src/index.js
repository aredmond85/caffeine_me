const drinkForm = document.querySelector('#newDrinkForm')
const submitButton = drinkForm.querySelector('input')
const imagesContainer = document.querySelector('#images-container')

drinkForm.addEventListener("submit", function(event) {
  
  event.preventDefault()

  const h2 = document.createElement('h2')
  const h3 = document.createElement('h3')
  const img = document.createElement('img')

  const name = document.querySelector('#drink-name').value
  const amount = document.querySelector('#drink-mg').value
  const url = document.querySelector('#drink-url').value

  h2.innerText = name
  h3.innerText = amount
  img.src = url
  
  imagesContainer.append(h2,h3,img)
  // document.querySelector('#drink-name').value = ""
  // document.querySelector('#drink-mg').value = ""
  // document.querySelector('#drink-url').value = ""
})

