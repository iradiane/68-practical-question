let numbers = [1, 2, 2, 3, 4, 4, 5];
let sum = 0;
function sumOfeven(sum){
  for(let i =0 ; i< numbers.length;i++)
  {
    if(numbers[i] % 2 ===0){
      sum += numbers[i];
    }
    
  }
  console.log(sum);
} sumOfeven(sum);