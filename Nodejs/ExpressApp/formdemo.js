var express = require('express');
var app = express();
var bodyParser = require("body-parser"); 
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
    res.sendFile("welcome.html",{root:__dirname})
  })
  app.post('/process',(req,res)=>{
    var fn=req.body.fname;
    var ln=req.body.lname;
  
    res.send("Hello "+fn+" "+ln);
  })

  app.listen(3000,function(){
    console.log("server running on http://localhost:3000")
})
