// Create a function that willreturn the number of words in a text

function count(word) {
    let num = 0;
    let sum = true;
    for (let c of word) {
        if (" \t\n\r,;.!?".includes(c)) {
            sum = true;
        } else {
            if (sum) {
                num++;
                sum = false
            }
        }
    }
    return num
}
console.log(count("i love eating"));