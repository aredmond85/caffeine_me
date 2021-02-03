const api = new API()

// Global Variables //
const main = document.querySelector('main')
const form = document.getElementById("newDrinkForm")
const allDrinks = []

document.addEventListener("DOMContentLoaded", function () {

    form.addEventListener("submit", (event) => {
        event.preventDefault()

        let name = event.target.name.value
        let caffeine = event.target.caffeine.value

        api.addDrink(name, caffeine)
            .then(drink => {
                const newDrink = new Drink(drink)
                allDrinks.push(newDrink)
            })

            event.target.reset()
    })

    api.fetchDrinks()
        .then(data => {
            data.forEach(drink => {
                const newDrink = new Drink(drink)
                allDrinks.push(newDrink)
            })
        }).then(() =>
            api.fetchComments()
            .then(comments => {
                comments.forEach(comment => {
                    const newComment = new Comment(comment)
                    const drink = Drink.findById(newComment.drinkId)
                    drink.comments.push(newComment)
                    drink.card.handleLoadComment()
                })
            })
        )
})