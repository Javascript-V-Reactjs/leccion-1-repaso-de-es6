// const tax = (price) => {
//     return price * 0.13
// }
const tax = price => price * 0.13

const price = 1000

console.log(`the price is ${price + tax(price)}`)

const classicPerson = {
    name: 'classic person',
    sayName: function() {
        console.log(this.name)
    }
}

const arrowPerson = {
    name: 'arrow person',
    sayName: () => {
        console.log(this.name)
    }
}

classicPerson.sayName()

arrowPerson.sayName()

console.log(this)
