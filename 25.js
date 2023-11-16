// Create a function that will receive two arrays of numbers as arguments and
// return an array composed of allthe numbers that are either in the first array
// or second array but not in both

function arrays(a, b) {
    const c = []

    for (const num of a) {
        if (b.indexOf(num) === - 1) {
            c.push(num)
        }
    }
    for (const num of b) {
        if (a.indexOf(num) == -1) {
            c.push(num)
        }
    }
    return c
}
const a = [1, 2, 3, 4, 5];
const b = [3, 4, 5, 6, 7];
const d = arrays(a, b)
console.log(d); 
