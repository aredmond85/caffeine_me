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
  
    headers = {"Accepts": "application/json", "Content-Type": "application/json"}
  
    // Attribute Getters //
  
    get drinkURL() {
        return this.url + '/posts'
    }

    get commmentURL() {
        return this.url + '/comments'
    }

    fetchDrinks = () => {
        return fetch(this.postURL).then(this.parseJSON)
    }

    fetchDrink = (id) => {
        return fetch(this.postURL + `/${id}`).then(this.parseJSON)
    }
  }
  