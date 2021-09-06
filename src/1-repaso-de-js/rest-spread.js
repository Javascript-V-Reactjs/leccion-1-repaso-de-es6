let a
let b
let spread
[a, b, ...spread] = [10, 20, 30, 40, 50]

console.log(spread)
console.log(a)
console.log(b)

export default function sum (...args) {
    let result = 0
    for (let arg of args) {
        result += arg
    }
    return result
    // return args.reduce((prev, curr) => prev + curr) 
}

// console.log(sum(2,3,6,8,34))