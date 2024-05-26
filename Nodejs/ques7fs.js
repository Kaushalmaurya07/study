var fs = require('fs')


fs.readFile('customer.json', function (err,data){
     
    if (err) {
        console.log(err)
    }
    else{
        const customers = JSON.parse(data)
        customers.forEach(customer => {
            console.log('Customer Name',customer.name);
            console.log('Contact Number',customer.phno);
        });
    }
})