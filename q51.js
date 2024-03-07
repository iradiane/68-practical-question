let numbers = [-1,-2,3,4,5,6,7];
function filternegative(numbers){
  let negnumber =  numbers.filter(num => num < 0);
  console.log(negnumber);
} filternegative(numbers);