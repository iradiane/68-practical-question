let numbers = [1,2,2,2,3,3,3];
let sum = 0;
function sumArray(array){
  for(let i = 0; i < array.length; i++){
    sum = sum + array[i];
  }
  return sum; }
  
  let total = sumArray(numbers);
  console.log(sum);