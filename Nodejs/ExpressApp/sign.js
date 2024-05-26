var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
loaddata=[]
app.get('/', function (req, res) {
    res.sendFile('signup.html', { root: __dirname });
  });

app.post('/signup', (req, res) => {
  const name = req.body.uname;
  const pass = req.body.pass;
  loaddata.push({name,pass})
  res.send(loaddata); 
});

app.listen(3000, function () {
  console.log('server running on http://localhost:3000')
})