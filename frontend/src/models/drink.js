class Drink {

    constructor(data) {
        // Assign Attributes //
        this.id = data.id
        this.name = data.name
        this.caffeine = data.caffeine

        // Build Comment Dependents //
        const comments = data.comments.map(comment => new Comment(comment, this))

        // Build Associated Drink Card //
        this.card = new DrinkCard(this, comments)
    }

    createDrink = () => {
        api.postDrink(this.id)
            .then(comment => {
                const newComment = new Comment(comment)
                this.card.addCommentLi(newComment)
            })
            .catch(console.log)
    }

    delete = () => {
        api.deleteDrink(this.id)
        delete this
    }
}