function findIntersection(array1, array2) {
  let int = array1.filter(element => array2.includes(element));
   return int;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log("Intersection:", findIntersection(array1, array2)); 
