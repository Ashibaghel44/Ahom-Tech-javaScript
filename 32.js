// Create a function that will capitalize the first letter of each word in a text

function capital(lett) {
  if (!lett) {
    return '';
  }
  const words = lett.split(' ');

  for (let i = 0; i < words.length; i++) {

    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return words.join(' ');
}

const text = "my name is ashish";
const result = capital(text);
console.log(result); 
