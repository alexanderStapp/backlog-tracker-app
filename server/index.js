const express = require('express')

const app = express()
const PORT = 3030

const tc = require('./titleController')

app.use(express.json())

// app.get
// app.post

app.listen(PORT, () => console.log(`server is rinning on ${PORT} :3`))