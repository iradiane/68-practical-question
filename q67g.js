function getObjectSize(obj) {
  return Object.keys(obj).length;
}

const exampleObject = {
  name: "diane",
  age: 30,
  city: "kigali"
};

console.log(getObjectSize(exampleObject));
