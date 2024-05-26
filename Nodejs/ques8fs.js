var fs = require('fs')

var emp=[{id:23,name:'Abigail',author:"",price:20000},
    {id:24,name:'Sks',author:"",price:21000},
    {id:25,name:'AKM',author:"",price:22000},
    {id:26,name:'SLR',author:"",price:24000}]

str=""
for(i of emp){
    fprice=i.price*10/100
    str=i.id+' '+i.name+' '+i.author+' '+i.price+' '+fprice+"\n"



 
    
fs.appendFile('book.txt',str,function(err){
    if(err)
        {
            console.log(err);
        }
    else {
            console.log("file created");
  
          }
})
}