const api = new API()

// Global Variables //
const main = document.querySelector('main')
const form = document.getElementById("newDrinkForm")
const darkButton = document.getElementById("dark-button")
const sortDesc = document.getElementById("sortDesc")
const allDrinks = []

// Adds Dark Mode to application //
darkButton.addEventListener("click", () => {
    if (document.body.style.backgroundColor === "") {
        document.body.style.backgroundColor = "black";
        document.querySelector("h1").style.color = "white";
        document.getElementById("dark-button").className = "btn btn-light";
        document.getElementById("dark-button").value = "Light Mode";
        document.querySelectorAll("label").forEach(element =>
            element.style.color = "white"
        )
    } else {
        document.body.style.backgroundColor = ""
        document.querySelector("h1").style.color = "black";
        document.getElementById("dark-button").className = "btn btn-dark";
        document.getElementById("dark-button").value = "Dark Mode";
        document.querySelectorAll("label").forEach(element =>
            element.style.color = "black"
        )
    }
})

sortDesc.addEventListener("click", () => {
    allDrinks.sort((a, b) => {
        const nameA = a.name.toLowerCase(),
            nameB = b.name.toLowerCase()
        if (nameA < nameB) //sort string ascending
            return 1
        if (nameA > nameB)
            return -1
        return 0 //default return value (no sorting)
    })

    allDrinks.forEach(drink => {
        console.log(drink)
        const h3 = document.querySelector('.card h3')
        const p = document.querySelector('.card p')
        if (h3.innerText !== drink.name) {
            h3.innerText = drink.name
            p.innerText = `Caffeine Amount - ${drink.caffeine}`
        } else {
            h3.innerText
            p.innerText
        }
        console.log(h3.innerText)
        console.log(drink.name)
        console.log(p.innerText)
        console.log(`Caffeine Amount - ${drink.caffeine}`)

    })
})

// Event listener for form and adding a new Drink to the API //
form.addEventListener("submit", (event) => {

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