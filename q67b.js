function ObjectValues(obj) {
  for (let prop in obj) {
      console.log(obj[prop]);
  }
}

const exampleObject = {
  name: "diane",
  age: 20,
  city: "kigali"
};

ObjectValues(exampleObject);
