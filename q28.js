function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

console.log("Is 'racecar' a palindrome?", isPalindrome('racecar')); 
console.log("Is 'hello' a palindrome?", isPalindrome('hello')); 
