const numbers = [5, 3, 10, 1, 7];
function findMaxMin(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return { max, min };
}

console.log(findMaxMin(numbers)); 
