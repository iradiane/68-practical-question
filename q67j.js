function transformObjectValuesToUpper(obj) {
  const transformedObj = {};
  for (let prop in obj) {
      transformedObj[prop] = obj[prop].toUpperCase();
  }
  return transformedObj;
}

const exampleObject = {
  name: "diane",
  city: "kigali"
};

console.log(transformObjectValuesToUpper(exampleObject)); 
