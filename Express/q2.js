var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/q2.html')
})

app.post('/submit-student-data', (req,res) =>{
    var name = req.body.fname + ' ' + req.body.lname
    res.send(name + ' Submitted')
})

var server = app.listen(3000, () => {
    console.log('Listening')
})