function wordsLen(str) { 
  const array = str.trim().split(/\s+/); 
  return array.length; 
} 

const str = "Welcome, to the Kigali rwanda"; 

console.log("Word count:" ,wordsLen(str));