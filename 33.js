// Calculate the sum of numbers received in a comma delimited string

function comma(string)
{
    let a = string.split(",");
    
    let sum = 0;
    
    for(let n of a)
    {
        sum += parseFloat(n);
    }
    
    return sum;
}
console.log(comma("1,2,3,4,5,6,7,8,9"));