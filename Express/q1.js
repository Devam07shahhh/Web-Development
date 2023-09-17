const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send('Hi')
})

app.get('/books',(req,res) => {
    res.send('Books')
})

app.listen(3000, () => {
    console.log("Listening")
})