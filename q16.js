var someNumbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];
// arrange these elements of the array in ascending order.
function sortAscending(arr) {
    return arr.sort((a, b) => a - b);
}

console.log(sortAscending(someNumbers)); 
// rearrange the number
function rearrangeArray(arr) {
  const sortedArray = sortAscending(arr);
  const firstThree = sortedArray.slice(0, 3);
  const lastThree = sortedArray.slice(-3);
  return lastThree.concat(sortedArray, firstThree);
}

console.log(rearrangeArray(someNumbers)); 
// display the 3numbers
function firstThreeNumbers(arr) {
  const sortedArray = sortAscending(arr);
  return sortedArray.slice(0, 3);
}

console.log(firstThreeNumbers(someNumbers)); 


