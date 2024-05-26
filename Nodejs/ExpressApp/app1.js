var express = require('express');
var app = express();
var bodyParser = require("body-parser"); 
app.use(bodyParser.urlencoded({ extended: false }));
/*app.get('/', function(req, res) {
    res.send('Hello');
  });

app.get('/user', function(req, res) {
    var user = {
name: 'Krishna',
};
    res.send(user);
  });

  app.get('/names', function(req, res) {
    var names = ['Kaushal','Maurya','Kumar']

    res.send(names);
  });

/*app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'welcome.html'));
});

app.get('/',function(req,res){
    res.sendFile("./form.html",{root:__dirname})
})
*/
app.get('/',(req,res)=>{
  res.sendFile("welcome.html",{root:__dirname})
})
app.get('/process',(req,res)=>{
  var fn=req.body.fname;
  var ln=req.body.lname;

  res.send("Hello "+fn+" "+ln);
})
/*
app.get('/',function(req,res){
  res.sendFile("./q11.html",{root:__dirname})
})

app.get('/process',(req,res)=>{
  var fn=req.query.fname;
  var ln=req.query.lname;
  var tn=req.query.tname;

  res.send("The parameters are:<br> <ul><li>"+fn+"</li><li>"+ln+"</li><li>"+tn+"</li></ul>");
})
*/
app.listen(3000,function(){
    console.log("server running on http://localhost:3000")
})

