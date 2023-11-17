// Implement the bubble sort algorithm for an array of numbers

function bubble(arr) {
    const aa = arr.length;

    for (let i = 0; i < aa - 1; i++) {
        for (let j = 0; j < aa - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {

                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}


const numbers = [23, 1000, 1, -1, 8, 3];
console.log('Original Array:', numbers);
console.log('Sorted Array:', bubble(numbers.slice()))