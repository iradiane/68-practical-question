const numbers = [1, 26, 23, 4, 5, 9, 65, 8, 9, 10];
function printEvenNumbers(arr) {
  for (let num of arr) {
      if (num % 2 === 0) {
          console.log(num);
      }
  }
}

printEvenNumbers(numbers); 
