var fs = require('fs')

fs.readFile("emp.txt","utf8",function(err,data){
    if(err){
        console.log("Error!")
    }
    else{
        var lines= data.split("\n")
        var totalSalary=0

        for(var i=0;i<lines.length;i++){
            var fields =lines[i].split(":")
            totalSalary+= parseInt(fields[3]) 
        }
        console.log("Total Salary: "+totalSalary)
    }
})
