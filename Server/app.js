const express = require('express');
const path = require('path');
const hbs = require('hbs');
const reservation = require('./reservation/reservation');

const app = express();
const port = 3000;

const publicDir = path.join(__dirname, '../WebServer/public')
const viewsPath = path.join(__dirname, '../WebServer/views')

app.use(express.static(publicDir))
app.use(express.urlencoded())

app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/reservations', (req, res) =>{
    // res.send(reservation.listReservations())
    res.render('reservation',{
        id: req.body.id,
        user: req.body.user,
        location: req.body.location,
        startDateTime: new Date(req.body.startDateTime).toDateString(),
        endDateTime: new Date(req.body.endDateTime).toDateString()
    },
    reservation.addReservation(
        req.body.id,
        req.body.user,
        req.body.location,
        req.body.startDateTime,
        req.body.endDateTime
        ))
})

app.listen(port, () => {
    console.log('Server is up on port 3000')
})
