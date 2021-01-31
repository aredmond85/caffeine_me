const api = new API()
const form = document.getElementById("newDrinkForm")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const name = event.target.name.value
    const caffeine = event.target.caffeine.value

    api.addDrink(name, caffeine)
    .then(drink => {
        const newDrink = new Drink(drink)
        console.log(newDrink)
    })
})


api.fetchDrinks()
.then(data => {
    data.forEach(drink => new Drink(drink))
})