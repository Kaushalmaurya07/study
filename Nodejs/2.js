function namelength(employeeNames) {
    const longNames = employeeNames.filter(name => name.length > 4);
  
    if (longNames.length == 0)
    {
      console.log("No employee names found with length greater than 4.");
    } 
    else 
    {
      console.log("Employee names with length greater than 4:");
      console.log(longNames+"\n"); 
    }
  }
  
  
  const employeeNames = ["Joy","Meena","Anne","Xi","Veena","Vanitha"];
  namelength(employeeNames);
  