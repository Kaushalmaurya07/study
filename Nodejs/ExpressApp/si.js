const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: '*'
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.sendFile('simpleInt.html' , { root : __dirname});
 });

app.post('/api/simple-interest', function(req, res) {
    const principal = req.body.principal;
    const years = req.body.years;
    const rate = req.body.rate;
  
    const simpleInterest = (principal * rate * years) / 100;
  
    res.send({ simpleInterest });
  });

app.listen(3000, function() {
    console.log("Server is running");
});