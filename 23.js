// Reverse a string

// function reverseString(str){
// for(let i =strLen-1; i >= 0; i--){
//     reverseString += string[i]
// }
// }
// let strLen = string.length;
// console.log(string);




function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  const string = "qwerty";
  const reversedString = reverseString(string);
  console.log(reversedString);
  
