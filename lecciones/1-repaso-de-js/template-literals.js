let brand = 'tesla'
let model = 'roadster'
let price = 1000000
let tax = 0.13

// Sintaxis clasica de un string
let message = 'The price of the ' + brand + ' ' + 
               model + ' is $' + (price + price * tax)

// Sintaxis de Template Literals                            
let messageTL = `The price of the ${brand} ${model} is $${price + price * tax}`