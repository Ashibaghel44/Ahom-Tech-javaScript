// Create a function that will return a Boolean specifying if a number is prime


function isPrime(num) { 
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) { 
        if (num % i === 0) { 
            return false; 
        }
    }
    return true;
} 
const number = 12
console.log(`Is ${number} a prime number? ${isPrime(number)}`)