const express = require('express')
const app = express()
const port = 3500

app.get('/hola', (req, res) => {
    res.send("Hello Worldd")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
