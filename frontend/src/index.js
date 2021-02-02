const api = new API()
const form = document.getElementById("newDrinkForm")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const name = event.target.name.value
    const caffeine = event.target.caffeine.value

    const ul = document.querySelector("ul")

    api.addDrink(name, caffeine)
    .then(drink => {
        name.value = ""
        caffeine.value = ""
        const newDrink = new Drink(drink)
        ul.append(newDrink)
        console.log(newDrink)
    })
})


api.fetchDrinks()
.then(data => {
    data.forEach(drink => new Drink(drink))
})