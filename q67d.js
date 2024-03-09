function modifyObjectValues(obj) {
  for (let prop in obj) {
      if (typeof obj[prop] === 'number') {
          obj[prop] *= 2;
      }
  }
}

const exampleObject = {
  num: 5,
  num1: 10,
  g: "hello"
};

modifyObjectValues(exampleObject);
console.log(exampleObject); 
