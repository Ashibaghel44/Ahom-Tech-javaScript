// Rotate an array to the left 1 position 

let array = [1, 2, 3, 4, 5, 6, 7];

function rotateLeft(array)
{
    let first = array.shift();
    array.push(first);
}
rotateLeft(array);
console.log(array);
