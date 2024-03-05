let numbers = [1,2,2,2,3,3,3];
function sumArray(array){
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    sum = sum + array[i];
    console.log(sum);
  }
  return sum; }
  
  let total = sumArray(numbers);