class Drink {

    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.caffeine = data.caffeine
        data.comments.forEach(element => {
            const comment = new Comment(element)
            comment.drink = this
        })
    }

    createDrink = () => {
        
    }
}