// Find the maximum number in a jagged array of numbers or array of numbers


let ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];

function findMax(ar) {
    let max = -Infinity;
    for (let i = 0; i < ar.length; i++) {
        let aa = ar[i];
        if (Array.isArray(aa)) {
            aa = findMax(aa)
        }
        if (aa > max) {
            max = aa;
        }
    }
    return max
}

let m = findMax(ar);
console.log("Max  = ", m);



