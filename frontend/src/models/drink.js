class Drink {

    constructor(data) {
        // Assign Attributes //
        this.id = data.id
        this.name = data.name
        this.caffeine = data.caffeine
        this.comments = []

        // Build Associated Drink Card //
        this.card = new DrinkCard(this, this.comments)
    }
    
    delete = () => {
        api.deleteDrink(this.id)
        delete this
    }
}