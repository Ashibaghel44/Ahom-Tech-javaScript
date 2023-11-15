// Calculate the average of the numbers in an array of numbers

let numm = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let summ = 0;
for(let i=0; i< numm.length; i++){
    summ += numm[i]
}

let average = summ/numm.length;
console.log("total average of values : " + average);

