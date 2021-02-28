class Drink {

    constructor(data) {
        // Assign Attributes //
        this.id = data.id
        this.name = data.name
        this.caffeine = data.caffeine
        this.comments = []

        this.card = new DrinkCard(this, this.comments)
    }

    // Searches allDrinks Array and finds drink by id //
    static findById(id) {
        return allDrinks.find(drink => drink.id === id)
    }

    // Delete function to Delete from API //
    delete = () => {
        api.deleteDrink(this.id)
        delete this
    }

    render(node) {
        // this method will render each card; node is a reference to a DOM node
        node.appendChild(this.card.cardContent);
     }
}