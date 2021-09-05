let brand = 'tesla'
let model = 'roadster'
let price = 1000000
let tax = 0.13

// let message = 'The price of the ' + brand + ' ' + model + ' is $' + (price + price * tax)
let message = `The price of the ${brand} ${model} is $${price + price * tax}`
console.log(message)