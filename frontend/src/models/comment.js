class Comment  {

    constructor(data) {
         // Assign Attributes //
        this.id = data.id
        this.summary = data.summary
        this.drinkId = data.drink_id
    }

    // Delete function to Delete from API //
    delete = () => {
        api.deleteComment(this.id)
        delete this
    }
}