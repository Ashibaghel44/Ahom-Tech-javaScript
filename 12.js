// Create a function that receives an array of numbers as argument and returns an
// array containing only the positive numbers


function extract(inputArray){
    return inputArray.filter(number=>number > 0) 
}

let arr= [1,-2,-5,2,8,-9,3,-5,-6]
let positive = extract(arr);
console.log(positive)