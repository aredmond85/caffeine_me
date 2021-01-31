class Comment  {

    constructor(data) {
        this.id = data.id
        this.summary = data.summary
        this.drinkId = data.drink_id
    }

    delete = () => {
        api.deleteComment(this.id)
        delete this
    }
}