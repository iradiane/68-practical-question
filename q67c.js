function searchForKey(obj, key) {
  return key in obj;
}
const exampleObject = {
  name: "ritha",
  age: 20,
  city: "New York"
};

console.log(searchForKey(exampleObject, 'age')); 
console.log(searchForKey(exampleObject, 'gender'));
