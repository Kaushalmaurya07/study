var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

let users = [ 
    {uname:"shrilata", pass:"secret"}, 
    {uname:"admin", pass:"admin123"}, 
    {uname:"user1", pass:"pass1"},
]


app.get('/', function (req, res) {
  res.sendFile('login.html',{root:__dirname})
})

app.post('/process', (req, res) => {
    const name = req.body.uname;
    const pass = req.body.pass;
    
   // let user = users.find(user => user.uname === name && user.pass === pass);
   for(user of users)
   {
    if (user.uname == name && user.pass == pass) {
        res.sendFile("success.html", { root: __dirname });
      } 
      else {
        res.sendFile("failure.html", { root: __dirname });
      }
   } 
  });

app.listen(3000, function () {
  console.log('server running on http://localhost:3000')
})