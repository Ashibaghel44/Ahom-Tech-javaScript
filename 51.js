// Find the frequency of letters inside a string.Return the result as an array of
// arrays.Each subarray has 2 elements:letter and number of occurrences.

function findLetterFrequency(str) {
    const frequencyMap = {};
  
    for (let char of str.toLowerCase()) {
      if (/[a-z]/.test(char)) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
      }
    }
  
    return Object.entries(frequencyMap);
}
  
  
const inputString = 'Ashish Baghel';
const frequencyArray = findLetterFrequency(inputString);
console.log(frequencyArray);