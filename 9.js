// Create a function that will convertfrom Fahrenheit to Celsius

function fare(faren) {
    return (faren - 32) * 5 / 9
}
let farenT = 90;
let celS = fare(farenT);
console.log(`${farenT}°F is equal to ${celS}°C`);
