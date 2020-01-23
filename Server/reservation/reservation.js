const fs = require('fs')

const addReservation = (id, user, location, startDateTime, endDateTime) => {
    const reservations = loadReservations()
    const dulpicateReservations = reservations.find((reservations) => reservations.id === id)

    if (!dulpicateReservations) {
        reservations.push({
            id: id,
            user: user,
            location: location,
            startDateTime: startDateTime,
            endDateTime: endDateTime
        })
        saveReservation(reservations)
         console.log('New Reservation!')
    } else {
        console.log('Duplicate Reservation!')
    }
}

const listReservations = () => {
    return reservations = loadReservations()
}


const saveReservation =  (reservations) => {
    const dataJSON = JSON.stringify(reservations)
    fs.writeFileSync('reservations.json', dataJSON)
}

const loadReservations = () => {
    try {
        const dataBuffer = fs.readFileSync('reservations.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addReservation: addReservation,
    listReservations: listReservations
}