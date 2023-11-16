// Rotate an array to the right 1 position

let array = [1, 2, 3, 4, 5, 6, 7];

function rotateRight(array) {
    let last = array.pop();
    array.unshift(last)
}

rotateRight(array);
console.log(array);