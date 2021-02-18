class API {

  // Constructor //

  constructor(port = 3000) {
    this.url = `http://localhost:${port}`
  }

  // Helpers //

  parseJSON = response => {
    if (response.status === 200) {
      return response.json()
    } else {
      return this.catchError
    }
  }

  headers = {
    "Accepts": "application/json",
    "Content-Type": "application/json"
  }

  catchError = error => {
    console.log("Error: " + error)
  }

  // Attribute Getters //

  get drinkURL() {
    return this.url + '/drinks'
  }

  get commentURL() {
    return this.url + '/comments'
  }

  // Drink Requests //
  fetchDrinks = () => {
    return fetch(this.drinkURL).then(this.parseJSON)
  }

  fetchDrink = (id) => {
    return fetch(this.drinkURL + `/${id}`).then(this.parseJSON)
  }

  // Comment Requests //
  fetchComments = () => {
    return fetch(this.commentURL).then(this.parseJSON)
  }

  fetchComment = (id) => {
    return fetch(this.commentURL + `/${id}`).then(this.parseJSON)
  }

  addDrink(name, caffeine) {
    const drink = {
      name: name,
      caffeine: caffeine
    }

    return fetch(this.drinkURL, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(drink)
      }).then(this.parseJSON)
      .catch(this.catchError)
  }

  deleteDrink = (id) => {
    return fetch(this.drinkURL + `/${id}`, {
        method: "DELETE",
        headers: this.headers
      }).then(this.parseJSON)
      .catch(this.catchError)
  }

  // Comment POST/DELETE/Add Functions
  addComment(drinkId, commentSummary) {
    const comment = {
      drink_id: drinkId,
      summary: commentSummary
    }

    return fetch(this.commentURL, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(comment)
      }).then(this.parseJSON)
      .catch(this.catchError)
  }

  deleteComment = (id) => {
    return fetch(this.commentURL + `/${id}`, {
        method: "DELETE",
        headers: this.headers
      }).then(this.parseJSON)
      .catch(this.catchError)
  }
}