const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let collection;
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017', function(err, client) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MongoDB');
    const db = client.db();
    collection = db.collection('users');
  }
});

app.get('/', function (req, res) {
  res.sendFile('signup.html', { root: __dirname });
});

app.post('/signup', (req, res) => {
  const name = req.body.uname;
  const pass = req.body.pass;
  const newUser = { uname: name, pass: pass };
  collection.insertOne(newUser, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.sendFile("success.html", { root: __dirname });
    }
  });
});

app.listen(3000, function() {
  console.log("Server is running");
});