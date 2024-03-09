function sortObjectKeys(obj) {
  const sortedKeys = Object.keys(obj).sort();
  const sortedObject = {};
  sortedKeys.forEach(key => sortedObject[key] = obj[key]);
  return sortedObject;
}

const exampleObject = {
  m: 4,
  n: 1,
  o: 8
};

console.log(sortObjectKeys(exampleObject)); 