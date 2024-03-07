let numbers = [-1,1, 2, 3, 4, 5];
function checkpositive(){
  let allPositive = numbers.every(num => num > 0);
  console.log(allPositive);
}
checkpositive();
