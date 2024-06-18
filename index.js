const express = require('express')
const app = express()
const port = 3000



function sumar(sum1, sum2) {
    sum1 = Math.floor(Math.random ()*50)
    sum2 = Math.floor(Math.random ()*50)
    var resultado = [sum1 + sum2];
    console.log(sum1 + "+" + sum2 + "=" + resultado)  
    return sum1, sum2, resultado
}

app.get('/suma', (req, res) => {
    sum1 = req
    sum2 = req
    res.send(sumar(sum1, sum2))
})

function multiplicar(mul1, mul2) {
    mul1 = Math.floor(Math.random ()*10)
    mul2 = Math.floor(Math.random ()*10)
    var resultado = [mul1 * mul2];
    console.log(mul1 + "x" + mul2 + "=" + resultado)  
    return mul1, mul2, resultado
}

app.get('/multiplicacion', (req, res) => {
    mul1 = req
    mul2 = req
    res.send(multiplicar(mul1, mul2))
})
    
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
  