function findSmallestNumber(arr) {
  if (arr.length === 0) {
      return undefined; 
  }

  let smallest = arr[0]; 
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
          smallest = arr[i]; 
      }
  }

  return smallest; 
}


const numbers = [5, 3, 9, 2, 7];
console.log(findSmallestNumber(numbers)); 
