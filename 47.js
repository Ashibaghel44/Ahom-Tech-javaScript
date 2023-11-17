// Deep copy a jagged array with numbers or other arrays in a new array 

let a = [2, 4, 10,[12, 4, [100, 99],4],[3,2,99],0];
let b = jArray(a);

function jArray(c) {
    let b =[]
    for(let el of c){
        if(Array.isArray(el)){
            el = jArray(el)
        }
        b.push(el)
    }
    return b
}

console.log(b);