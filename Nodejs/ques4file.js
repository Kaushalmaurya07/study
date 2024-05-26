var fs = require('fs')
var names=['Krishna','Maurya','Karan','Singh']
var data=names.join(",")
fs.writeFile("names.txt",data,function(err,data){
    if(err)
        console.log(err.message)
    
    console.log(data)
})


