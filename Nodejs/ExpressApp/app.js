const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let collection;
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/admin', function(err, client) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MongoDB');
    const db = client.db('admin');
    collection = db.collection('users');
  }
});


app.get('/',(req,res)=>{
    res.sendFile("product.html",{root:__dirname})
  })

  app.post('/process',(req,res)=>{                          //to add product
    var id=req.body.pid;
    var name=req.body.pname;
  
   res.send(id +  name  +' Product added ')
  db.collection('users').insertOne(req.body, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.sendFile("success.html", { root: __dirname });
    }
  });
  })

  app.get('/users', (req, res) => {                          //to get detail of all products
    db.collection('users').find({}).toArray((err, users) => {
      if (err) {
        console.log(err);
      } else {
        res.send(users);
      }
    });
  });
  app.get('/product/:id', (req, res) => {                       //to get details on one product
    const productId = req.params.id;
    db.collection('users').findOne({ _id: ObjectId(productId) }, (err, product) => {
      if (err) {
        console.log(err);
      } else {
        res.send(product);
      }
    });
  });



  app.listen(1800,function(){
    console.log("server running on http://localhost:1800")
})
