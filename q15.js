var array = [1,3,4,3,7,8,0,12,19];    
function revese(array){

  array.sort((a, b) => b - a);
  console.log(array);
}
revese(array);