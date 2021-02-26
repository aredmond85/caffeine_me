class DrinkCard {
    constructor(drink, comments) {
        // Create Card //
        const card = document.createElement('div')
        card.setAttribute("class", "card w-50")
        main.append(card)
        card.className = 'card'

        // Add Nameplate //
        const drinkTag = document.createElement('h3')
        drinkTag.innerText = drink.name
        card.append(drinkTag)

        // Add CaffeinePlate //
        const caffeineTag = document.createElement('p')
        caffeineTag.innerText = `Caffeine Amount - ${drink.caffeine}`
        card.append(caffeineTag)

        // Adds Create Comment Input Field //
        const commentInput = document.createElement("input");
        commentInput.setAttribute("type", "text");
        commentInput.setAttribute("class", "input-group mb-3")
        commentInput.setAttribute("id", `commentInput-${drink.id}`)
        commentInput.setAttribute("placeholder", "Enter A Comment")
        card.append(commentInput);

        // Adds Create Comment Button //
        const addCommentButton = document.createElement('button')
        addCommentButton.innerText = "Add Comment"
        addCommentButton.setAttribute("class", "btn btn-primary btn-sm")
        card.append(addCommentButton)
        addCommentButton.addEventListener("click", () => this.handleAddComment())

        // Add Comment List //
        this.commentList = document.createElement('ul')
        card.append(this.commentList)

        comments.forEach(comment => this.addCommentLi(comment))

        // Create Delete Drink Button
        const addDeleteButton = document.createElement('button')
        addDeleteButton.setAttribute("class", "btn btn-danger btn-sm")
        addDeleteButton.innerText = 'Delete Drink'
        card.append(addDeleteButton)
        addDeleteButton.addEventListener("click", () => this.handleDeleteDrink(drink, card))

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
        button.setAttribute("class", "btn btn-link btn-sm")
        button.innerText = 'Delete'
        li.append(button)
        button.addEventListener("click", () => this.handleDeleteComment(comment, li))
    }

    // Event Handlers //
    // Handle Adding Comment to the DOM //
    handleAddComment = () => {
        const commentInput = document.getElementById(`commentInput-${this.drink.id}`)
        api.addComment(this.drink.id, commentInput.value)
            .then(comment => {
                commentInput.value = ""
                const newComment = new Comment(comment)
                Drink.findById(newComment.drinkId).comments.push(newComment)
                this.addCommentLi(newComment)
            })
    }

    // Loads last comment created for drink object //
    handleLoadComment = () => {
        const newComment = this.drink.comments[this.drink.comments.length - 1]
        this.addCommentLi(newComment)
    }

    // Deletes Comment from API and Removes li //
    handleDeleteComment = (comment, li) => {
        comment.delete()
        li.remove()
    }

    // Deletes Drink from API and Removes drink card //
    handleDeleteDrink = (drink, card) => {
        drink.delete()
        card.remove()
    }
}