
function removeDuplicates(array) {
  return Array.from(new Set(array));
}

console.log("Array after removing duplicates:", removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
