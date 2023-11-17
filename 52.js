// Calculate Fibonacci(500) with high precision (all digits) 

function fibonacci(n, memo = {}) {
  if (n in memo) {
    return memo[n];
  }

  if (n <= 2) {
    return BigInt(1);
  }

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

const result = fibonacci(500).toString();
console.log("Fibonacci(500):", result);