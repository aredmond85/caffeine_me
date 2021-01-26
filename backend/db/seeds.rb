Drink.delete_all
Comment.delete_all

Drink.create(name: "Monster Energy", caffeine: "160 mg")
Drink.create(name: "Rockstar Energy", caffeine: "160 mg")
Drink.create(name: "Coffee", caffeine: "80 mg")


Comment.create(summary: "My favorite energy drink", drink_id: 1)
Comment.create(summary: "Yay! Caffeine!", drink_id: 1)
Comment.create(summary: "This stinks", drink_id: 2)
Comment.create(summary: "Mmmmmm Coffee", drink_id: 3)