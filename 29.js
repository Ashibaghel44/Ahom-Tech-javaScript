// Print the distance between the first 100 prime numbers

function isPrime(num) {
    if (num <= 1) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    } return true;
}

function distance() {
    let prime = 2;
    let pp = 1;
    for (let num = 3; pp < 100; num++) {
        if (isPrime(num)) {
            console.log(`distance between ${prime} and ${num}: ${num - prime}`);
            prime = num;
            pp++
        }
    }
}
distance()