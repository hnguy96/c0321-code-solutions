function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

console.log('convertMinutesToSeconds:', convertMinutesToSeconds(5));

function greet(name) {
  var greeting = 'Hey ' + name + '!';
  return greeting;
}

console.log('greet: ', greet('Hien'));

function getArea(width, height) {
  var area = width * height;
  return area;
}

console.log('getArea: ', getArea(17, 42));

function getFirstName(person) {
  var name = {
    firstName: person.firstName,
    lastName: person.lastName
  };
  return name.firstName;
}

console.log('getFirstName: ', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

console.log('getLastElement: ', getLastElement(['propane', 'and', 'propane', 'accessories']));
