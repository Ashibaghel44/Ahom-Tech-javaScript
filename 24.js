// Create a function that will merge two arrays and return the result as a new
// array

let a = [1, 2, 3, 4, 5];
let b = [6, 7, 8, 9, 0];
let c = [];

for (let i = 0; i <= a.length - 1; i++) {
    c.push(a[i])
}
for (let j=0; j<=b.length - 1; j++){
    c.push(b[j])
}
console.log(c);