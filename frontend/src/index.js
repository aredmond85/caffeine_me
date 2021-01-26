const api = new API()

api.fetchDrinks()
.then(data => {
    data.forEach(drink => new Drink(drink))
})