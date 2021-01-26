const main = document.querySelector('main')

class DrinkCard {
    constructor(drink, comments) {
        // Create Card //
        const card = document.createElement('div')
        main.append(card)
        card.className = 'card'

        // Add Nameplate //
        const nameTag = document.createElement('p')
        nameTag.innerText = drink.name
        card.append(nameTag)

        // Adds Create Comment Button //
        const addButton = document.createElement('button')
        addButton.innerText = "Add Comment"
        card.append(addButton)
        addButton.addEventListener("click", drink.createPokemon)

        // Add Comment List //
        this.commentList = document.createElement('ul')
        card.append(this.commentList)

        comments.forEach(comment => this.addCommentLi(comment))

        // Connects to Drink //
        this.drink = drink
    }

    // Helpers //

    addCommentLi = comment => {
        // Create Li //
        const li = document.createElement('li')
        this.commentList.append(li)
        li.innerText = `${comment.summary}`

        // Create Delete Button
        const button = document.createElement('button')
        button.innerText = 'Delete'
        li.append(button)
        button.addEventListener("click", () => this.handleDeleteComment(comment, li))
    }

    handleDeleteComment = (comment, li) => {
        comment.delete()
        li.remove()
    }

}