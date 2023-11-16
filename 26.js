// Create a function that will receive two arrays and will return an array with
// elements that are in the first array but not in the second

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const res = diff(arr1, arr2);
console.log(res);

function diff(arr1, arr2) {
  return arr1.filter(element => !arr2.includes(element));
}