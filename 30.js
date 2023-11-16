// Create a function that will add two positive numbers of indefinite size.The numbers
// are received as strings and the result should be also provided as string.

// const num1 = "123456789123456789";
// const num2 = "987654321987654321";
// function addStrings(num1, num2) {
//     let result = '';
//     let carry = 0;
//     let i = num1.length - 1;
//     let j = num2.length - 1;

//     while (i >= 0 || j >= 0 || carry) {
//       const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
//       const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
//       const sum = digit1 + digit2 + carry;

//       carry = Math.floor(sum / 10);
//       result = (sum % 10) + result;

//       i--;
//       j--;
//     }

//     return result;
//   }
//   const sum = addStrings(num1, num2);
//   console.log(sum); 


const a = "123456789";
const b = "987654321";
function string(a, b) {
    let result = '';
    let c = 0;
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || c) {
        const digit1 = i >= 0 ? parseInt(a[i]) : 0;
        const digit2 = j >= 0 ? parseInt(b[j]) : 0;
        const sum = digit1 + digit2 + c;

        c = Math.floor(sum / 10);
        result = (sum % 10) + result;

        i--;
        j--;
    }
    return result;
}
const sum = string(a, b);
console.log(sum);