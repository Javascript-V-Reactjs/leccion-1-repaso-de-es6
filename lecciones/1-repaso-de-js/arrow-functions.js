// Arrow functions

const tax = (price) => {
    return price * 0.13
}
const price = 1000

console.log(`The total price is ${price + tax(price)}`)

const classicPerson = {
    name: 'classic Jose',
    sayName: function() {
        console.log(this.name)
    }
}

const arrowPerson = {
    name: 'arrow Jose',
    sayName: () => {
        console.log(this.name)
    }
}

classicPerson.sayName() // prints "classic jose"

arrowPerson.sayName() // prints undefined