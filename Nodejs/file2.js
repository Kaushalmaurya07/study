var fs = require('fs')

fs.readFile("test1.txt",function(err, data){
    if(err)
    {
        console.log("Error !",err.code,err.message)
    }
    else
    {
        console.log(data.toString())
    }
})