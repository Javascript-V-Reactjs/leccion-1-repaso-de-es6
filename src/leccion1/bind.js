const person = {
    name: 'Bruce',
    lastname: 'Wayne',
    fullname: function() {
      return `${this.name} ${this.lastname}`
    }
  }

const print = function(greet, adj) {
    console.log(greet, this.fullname(), 'you are', adj)
}

const printBinded = print.bind(person)
// print('hello', 'special')
// print.call(person, 'hello', 'special')
print.apply(person, ['hello', 'special'])


// printBinded('hello', 'special')




