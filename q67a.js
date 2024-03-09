function ObjectProperties(obj) {
    for (let prop in obj) {
        console.log(prop);
    }
}

const exampleObject = {
    name: "divine",
    age: 24,
    city: "rubavu"
};

ObjectProperties(exampleObject);
