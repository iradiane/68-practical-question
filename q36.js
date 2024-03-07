function countConsonants(str) {
  const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
  let count = 0;
  for (let char of str) {
      if (consonants.includes(char)) {
          count++;
      }
  }
  return count;
}
console.log("Number of consonants in 'hello world':", countConsonants("hello world"));
