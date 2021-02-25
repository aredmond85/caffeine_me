const api = new API()

// Global Variables //
const main = document.querySelector('main')
const form = document.getElementById("newDrinkForm")
const darkButton = document.getElementById("dark-button")
const allDrinks = []

document.addEventListener("DOMContentLoaded", function () {

    // Event listener for form and adding a new Drink to the API //
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

// Adds Dark Mode to application //
darkButton.addEventListener("click", () => {
    if (document.body.style.backgroundColor === "") {
        document.body.style.backgroundColor = "black";
        document.querySelector("h1").style.color = "white";
        document.querySelectorAll("label").forEach(element =>
            element.style.color = "white"
        )
    } else {
        document.body.style.backgroundColor = ""
        document.querySelector("h1").style.color = "black";
        document.querySelectorAll("label").forEach(element =>
            element.style.color = "black"
        )
    }
})