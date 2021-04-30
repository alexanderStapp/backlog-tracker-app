const express = require('express')

const app = express()
const PORT = 3030

const tc = require('./gameController')

app.use(express.json())

app.get('/api/games', tc.getGames)
app.post('/api/games', tc.addGame)
app.delete('/api/games/:id', tc.deleteGame)
app.put('/api/games/:id', tc.editGame)

app.listen(PORT, () => console.log(`server is running on ${PORT} :3`))