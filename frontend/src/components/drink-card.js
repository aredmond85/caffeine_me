const main = document.querySelector('main')

class DrinkCard {
    constructor(drink, comments) {
        // Create Card //
        const card = document.createElement('div')
        main.append(card)
        card.className = 'card'

        // Add Nameplate //
        const drinkTag = document.createElement('p')
        drinkTag.innerText = drink.name
        card.append(drinkTag)

        // Add CaffeinePlate //
        const caffeineTag = document.createElement('p')
        caffeineTag.innerText = `Caffeine Amount - ${drink.caffeine}`
        card.append(caffeineTag)

        // Adds Create Comment Button //
        const addButton = document.createElement('button')
        addButton.innerText = "Add Review"
        card.append(addButton)
        addButton.addEventListener("click", drink.createComment)

        const commentText= document.createElement("input");
        commentText.setAttribute("type", "text");
        commentText.setAttribute("value", "Enter a short comment");
        card.append(commentText);

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