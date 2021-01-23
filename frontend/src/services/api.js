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

  get commmentURL() {
    return this.url + '/comments'
  }

    // Drink Requests //
  fetchDrinks = () => {
    return fetch(this.drinkURL).then(console.log(this.parseJSON))
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
    return fetch(this.commmentURL).then(this.parseJSON)
  }

  fetchComment = (id) => {
    return fetch(this.commmentURL + `/${id}`).then(this.parseJSON)
  }

 
}