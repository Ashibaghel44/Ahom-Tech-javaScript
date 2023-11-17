// Create a function to calculate the sum of all the numbers in a jagged array
// (contains numbers or other arrays of numbers on an unlimited number of
// levels)

let array = [1, [2, [3, 4], 5], 6, [7, 8, [9]]]

function summ(array) {
    let sum = 0;
    for(let i = 0; i<array.length; i++){
        let aa = array[i];

        if(Array.isArray(aa)){
            aa = summ(aa)
        }
        sum += aa;
    }
    return sum
}

console.log(summ(array));
