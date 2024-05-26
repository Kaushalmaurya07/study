var fs = require('fs')

var emp=[{name:'Abigail',age:23,salary:20000},
    {name:'Sks',age:24,salary:21000},
    {name:'AKM',age:25,salary:22000},
    {name:'SLR',age:26,salary:24000}]

    var employeeStrings = emp.map(function(emp) {
        return emp.name + ':' + emp.age + ':' + emp.salary;
      })

    var employeeData = employeeStrings.join('\n');

fs.writeFile('emps.txt',employeeData,function(err){
    if(err)
    {
        console.log(err);
    }
     else {
        console.log('Employee data has been written to the file.');
      }
})