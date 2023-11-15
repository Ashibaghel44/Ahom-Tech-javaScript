// Create a function that will convertfrom Celsius to Fahrenheit 

function cels(cel) {
    return(cel * 9/5) + 32
}
let celsT = 80;
let faren = cels(celsT);
console.log(`${celsT}°C is equal to ${faren}°F`);