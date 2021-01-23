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
  
    get postURL() {
        return this.url + '/posts'
    }

    get commmentURL() {
        return this.url + '/comments'
    }
  
  }
  