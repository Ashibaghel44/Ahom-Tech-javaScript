// Create a function that will return in an array the first“p” prime numbers
// greaterthan“n”

function primeNumber(p,n) {
    const primes = [];
    let num = n + 1;
    while (primes.length < p) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
            }            
        }
        if (isPrime && num > n) {
            primes.push(num)
        }
        num++
    }return primes;
}

const p = 5
const n = 10
const result = primeNumber(p , n)
console.log(result);
 
