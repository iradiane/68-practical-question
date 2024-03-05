let array = [1,2,2,2,3,3,3];
let max = array[0];
function largest(array){
  for(let i = 1; i < array.length; i++){
    if(array[i] > max){
      max =  array[i];
      // console.log("the largest element" + max);  
    }
   
  }
  return max;
   }
  largest(array);
  console.log("the largest element" + max);