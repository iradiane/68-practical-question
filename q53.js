function findMedian(numbers) {
  numbers.sort((a, b) => a - b); 
  const middle = Math.floor(numbers.length / 2);
  if (numbers.length % 2 === 0) {
      return (numbers[middle - 1] + numbers[middle]) / 2; 
  } else {
      return numbers[middle]; 
  }
}

function displayMedian(numbers) {
  let m = findMedian(numbers);
  console.log("Median:", m);
}

let numbers = [1, 3, 4, 5, 7];
displayMedian(numbers);
