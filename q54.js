// let words = "iradukunda marie diane";
// function firstletter(words){
//   cop = words.split("");
//   console.log(cop);
// } firstletter(words);
const mySentence = "freeCodeCamp is an awesome resource";
const words = mySentence.split(" ");

words.map((word) => { 
    return word[0].toUpperCase() + word.substring(1); 
}).join(" ");
console.log(words);