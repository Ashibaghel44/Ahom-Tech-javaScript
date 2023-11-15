// Create a function thatreceives an array of numbers as argument and returns an
// array containing only the positive numbers


let arr= [1,-2,-5,2,8,-9,3,-5,-6]
let positive = extract(arr);

function extract(inputArray){
    return inputArray.filter(number=>number > 0) 
}
console.log(positive)