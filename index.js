const express = require('express')
const app = express()
const port = 3500

app.get('/hola', (req, res) => {
    res.send("Hello Worldd")
})

const sumar = (req, res) => {
    sum1 = Number(req.query.sumando1)
    sum2 = Number(req.query.sumando2)
    var resultado = sum1 + sum2

    res.send(`sumar: ${sum1} + ${sum2} = ${resultado}`)
}
app.get('/suma', sumar)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
