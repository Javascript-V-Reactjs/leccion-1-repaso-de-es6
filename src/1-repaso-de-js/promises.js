const buyTicketSlowProcess = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false
            if (error) reject ("Someting went wrong")
            else resolve ("Ticket Buyed")
        }, 3000)
    })
}
console.log('I am waiting')
// buyTicket().then(success => console.log(success))
//            .catch(error => console.log(error))

async function buyTicket () {
    try {
        const result = await buyTicketSlowProcess() // pausa la ejecucion
        console.log(result)
    } catch(error){
        console.log(error)
    }
}

buyTicket()