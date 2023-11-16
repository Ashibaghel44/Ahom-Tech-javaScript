// Create afunction that will convert astring in an array containing the ASCII codes of
// each character

function getASCII(s)
{
    let a = [];
    
    for(let i = 0; i < s.length; i++)
    {
        let code = s.charCodeAt(i);
        a.push(code);
    }
    
    return a;
} 

console.log(getASCII("I love eating"));