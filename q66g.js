const numbers = [1, 2, 3, 2, 4, 5, 3, 6];
function findDuplicates(arr) {
  const duplicates = {};
  arr.forEach(item => {
      if (arr.indexOf(item) !== arr.lastIndexOf(item)) {
          duplicates[item] = true;
      }
  });
  return Object.keys(duplicates);
}

console.log(findDuplicates(numbers)); 
