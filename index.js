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

const multiplicar = (req, res) => {
    mul1 = Number(req.query.multiplicando1)
    mul2 = Number(req.query.multiplicando2)
    var resultado = mul1 * mul2

    res.send(`multiplicar: ${mul1} x ${mul2} = ${resultado}`)
}
app.get('/multiplicacion', multiplicar)

app.get('/lista-de-1', (req, res) => {
    var a = Number(req.query.a)
    var lista = []
    for (i = 1; i <= a; i++) {
        lista.push(i)
    }
    res.send(`${lista}`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
