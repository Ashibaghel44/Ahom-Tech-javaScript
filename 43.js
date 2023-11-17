// Create a function that will receive a bi-dimensional array as argument and a
// number and will extract as a unidimensional array the column specified by the
// number

let aa = [
    ["Aman", 150],
    ["Naman", 140],
    ["Ram", 120],
    ["Shyam",125]
]

function array(aa, colNo) {
    let ar =[]
    for(let i=0; i< aa.length; i++){
        ar.push(aa[i][colNo])
    }
    return ar
}
let num = array(aa, 1)
console.log(num);