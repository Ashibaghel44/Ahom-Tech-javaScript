// Create a function that will receive an array of numbers as argument and will return a
// new array with distinct elements

function arrays(ele) {
    const arr = [];
    for (let i = 0; i < ele.length; i++) {
        if (!arr.includes(ele[i])) {
            arr.push(ele[i]);
        }
    }
    return arr;
}
const numArray = [1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 9]
const num = arrays(numArray);
console.log(num);
