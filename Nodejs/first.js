function gp(rows){
    let pattern=''
    for(i=1;i<=rows;i++)
    {
        for(j=1;j<=i;j++)
        {   
            pattern += i + '';
        }
        pattern +='\n';
    }
    return pattern;
}
console.log(gp(9))
