class Comment  {

    constructor(data, drink) {
        // Object.keys(data).forEach(key => this[key] = data[key])
        this.id = data.id
        this.summary = data.summary
        this.drink = drink
    }

    // createComment = () => {
    //     api.postComment(this.id)
    //         .then(comment => {
    //             const newComment = new Comment(comment)
    //             this.card.addCommentLi(newComment)
    //         })
    //         .catch(console.log)
    // }

    delete = () => {
        api.deleteComment(this.id)
        delete this
    }
}