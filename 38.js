// Create a function that will convert an array containingASCII codes in a string

function asciiString(asciiArray) {
    const charArray = asciiArray.map(charCode => String.fromCharCode(charCode));
    return charArray.join('');
  }
  
  
  const asciiArray = [ 73,  32, 108, 111, 118, 101,  32, 101,  97, 116,105, 110, 103]
  const resultString = asciiString(asciiArray);
  console.log(resultString); 