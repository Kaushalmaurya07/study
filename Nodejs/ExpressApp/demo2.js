var express = require('express');

var app = express();

var persons = [ {    pid: 101,   name: 'Kaushal',        age: 24    },
    {        pid: 102,        name: 'Sahil',        age: 23    },
    {        pid: 103,        name: 'Amogh',        age: 25    },
    {        pid: 104,        name: 'Praful',        age: 24    }];

app.get('/',function(req,res){
    res.sendFile("./user.html",{root:__dirname})
  })
  
  app.get('/user/:uid',(req,res)=>{
    var flag=false
    var pid =req.params.uid;
    var pers;
    //var pid =req.query.pid;
    for(person of persons){
        if(person.pid==pid){
            flag=true
            pers=person;
            
        }
                    
    }
    if(flag=true)
        res.send(pers)
    else
        req.send("Person with pid "+pid+"Not Found")
  })
  app.get("/users",(req,res)=>{
    res.send(persons)
  })
  app.listen(3000,function(){
      console.log("server running on http://localhost:3000")
  })