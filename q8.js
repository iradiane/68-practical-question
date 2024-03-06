let array = [1,2,3,4,4,5];
let avg ;
function average(array){
  let sum =0;
  for(let i=0; i<array.length; i++){
 sum=sum + array[i];
 avg=sum/array[i];
  }
  return avg;
}
average(array);
console.log("the average number is" + avg);