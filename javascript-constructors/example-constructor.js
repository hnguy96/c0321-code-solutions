function ExampleConstructor() {
  console.log('value of the prototype property of the ExampleConstructor function: ', ExampleConstructor.prototype);
  console.log('typeof the prototype property of the ExampleConstructor: ', typeof ExampleConstructor.prototype);
}

var exampleInstantiation = new ExampleConstructor();
console.log('value of exampleInstantiation: ', exampleInstantiation);

var instanceOfExample = exampleInstantiation instanceof ExampleConstructor;
console.log('value of instanceOfExample: ', instanceOfExample);
