var fs = require('fs')
//fs.writeFileSync("test.txt","Hello welcome to kaushal")

var data =fs.readFileSync("test.txt","utf8")
//console.log(data.toString())
console.log(data)