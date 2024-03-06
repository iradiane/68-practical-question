function countCharacters(string) {
  // Remove spaces from the string
  var stringWithoutSpaces = string.replace(/\s+/g, '');
  // Count the characters in the string without spaces
  var numCharacters = stringWithoutSpaces.length;
  return numCharacters;
}

// Test the function
var testString = "dia ne";
console.log("Number of characters:", countCharacters(testString));
