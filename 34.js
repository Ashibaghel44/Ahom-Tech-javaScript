// Create a function thatreturns an array with words inside a text. 

function array(text) {
   
    const words = text.match(/\b\w+\b/g); 
    return words;
}
  
const text = "This is a sample text with several words.";
const wordArray = array(text);
console.log(wordArray);