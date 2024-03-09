function filterObject(obj, condition) {
  const filteredObj = {};
  for (let prop in obj) {
      if (condition(obj[prop])) {
          filteredObj[prop] = obj[prop];
      }
  }
  return filteredObj;
}

const exampleObject = {
  name: "joe",
  age: 30,
  city: "kigali"
};

const filteredObject = filterObject(exampleObject, value => typeof value === 'string');
console.log(filteredObject); 