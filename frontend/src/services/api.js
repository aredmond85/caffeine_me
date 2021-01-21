class API {
    // Constructor //

    constructor(port = 3000) {
        this.url = `http://localhost:${post}`
    }

    // Helpers //

    parseJSON = response => {
        if(response.status === 200) {
            return response.json()
        } else  {
            throw console.error("Nope")
        }
    }

    headers = {"Accepts": "application/json", "Content-Type": "application/json"}
}