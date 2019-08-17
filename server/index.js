const express = require('express')
const app = express()
const ctrl = require('./controller')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/api/players', ctrl.getPlayers)
app.post('/api/players', ctrl.createPlayer)
app.put('/api/players/:id', ctrl.updatePlayer)
app.delete('/api/players/:id', ctrl.deletePlayer)



const port = 8080

app.listen(8080, () => {
    console.log('server running')
})