class Comment  {

    constructor(data) {
        // Object.keys(data).forEach(key => this[key] = data[key])
        this.id = data.id
        this.summary = data.summary
    }

    // Helpers //

    delete = () => {
        // remove itself from the DOM
        // send a delete request to the backend
    }
}