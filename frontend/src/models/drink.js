class Drink {

    constructor(data) {
        // Assign Attributes //
        this.id = data.id
        this.name = data.name
        this.caffeine = data.caffeine
        this.comments = []

        this.card = new DrinkCard(this, this.comments)
    }
    
    static findById(id) {
        return allDrinks.find(drink => drink.id === id)
    }
    
    delete = () => {
        api.deleteDrink(this.id)
        delete this
    }
}