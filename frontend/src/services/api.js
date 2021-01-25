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
      throw console.error("Nope")
    }
  }

  headers = {
    "Accepts": "application/json",
    "Content-Type": "application/json"
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

  createDrink(DrinkName, CaffeineContent) {
    const drink = {
      name: DrinkName,
      caffeine: CaffeineContent
    }

    return fetch(this.drinkURL, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(drink)
    })
    .then(this.parseJSON)
  }

  deleteDrink(id) {
    return fetch(this.drinkURL + `/${id}`, {
      method: 'DELETE',
      headers: this.headers
    })
  }

  // Comment Requests //
  fetchComments = () => {
    return fetch(this.commentURL).then(this.parseJSON)
  }

  fetchComment = (id) => {
    return fetch(this.commentURL + `/${id}`).then(this.parseJSON)
  }

  postComment = (drinkId) => {
    return fetch(this.commentURL, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({drink_id: drinkId})
    }).then(this.parseJSON)
  }

  deleteComment = (id) => {
    return fetch(this.commentURL + `/${id}`, {
      method: "DELETE",
      headers: this.headers
    }).then(this.parseJSON)
  }
}