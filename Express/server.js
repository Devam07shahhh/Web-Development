/*
Question 1
const express = require("express")
const app = express()

app.get('/',function(req,res){
    res.send("Hello world")
})

app.get('/books',function(req,res){
    res.send("Information about books")
})

app.listen(3000,function(){
    console.log("server running on port 3000")
}) */

/* 
Question 2
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function (req, res) {
res.sendFile(__dirname+"/index.html");
});
app.post('/submit', function (req, res) {
var name = req.body.firstName + ' ' + req.body.lastName;
res.send(name + ' Submitted Successfully!');
});
var server = app.listen(5000, function () {
console.log('server is running..');
});
 */
const express=require("express")
const app=express()

const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended : false}))
app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html")
})
app.post('/submit',function(req,res){
    var name = req.body.FirstName + " "+ req.body.LastName
    res.send(name + " submitted successfully")
})
var server= app.listen(5000,function(){
    console.log("server is running on port 5000")
})
