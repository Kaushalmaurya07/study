var fs = require('fs')

/*fs.writeFile("sample.txt","Hello welcome",function(err){
    if(err)
        console.log(err.message)
    else
        console.log("File created")
})
fs.appendFile("sample.txt","\nKrishna maurya",function(err){
    if(err)
        console.log(err.message)
    else
        console.log("File created")
})
*/
fs.unlink("myfile.txt",(err)=>{
    if(err)
    
            console.log(err.message)
    
})