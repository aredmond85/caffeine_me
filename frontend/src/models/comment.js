class Comment  {

    constructor(data, drink) {
        // Object.keys(data).forEach(key => this[key] = data[key])
        this.id = data.id
        this.summary = data.summary
        this.drink = drink
    }

    // Helpers //

    delete = () => {
        api.deleteComment(this.id)
        delete this
    }
}