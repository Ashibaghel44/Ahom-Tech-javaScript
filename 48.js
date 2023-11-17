// Create a function to return the longest word in a string


function findLongestWord(str) {
 
    const words = str.split(' ');
    let longestWord = '';
  
    
    for (let i = 0; i < words.length; i++) {
      const currentWord = words[i];
      
      const cleanWord = currentWord.replace(/[^a-zA-Z]+/g, '');
  
      if (cleanWord.length > longestWord.length) {
        longestWord = cleanWord;
      }
    }
  
    return longestWord;
}
const inputString = "Paragraphs are the building blocks of papers";
const longestWord = findLongestWord(inputString);
console.log(longestWord);