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
buyTicketSlowProcess().then(message => {
                        console.log(message)
                        return message
                    }).then(message => {
                        return new Promise((resolve, reject) => {
                            setTimeout(() => {
                                console.log(`${message} in uppercase`.toUpperCase())
                            }, 3000)
                        })
                    })
                    .catch(error => console.log(error))