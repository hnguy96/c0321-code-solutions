var student = {
  firstName: 'Hien',
  lastName: 'Nguyen',
  age: 24
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'student';

console.log('value of livesInIrvine: ' + student.livesInIrvine);
console.log('value of previousOccupation: ' + student.previousOccupation);
console.log('value of student: ', student);

var vehicle = {
  make: 'Subaru',
  model: 'Outback',
  year: 2021
};

vehicle['isConvertible'] = false;
vehicle['color'] = 'black';

console.log('value of isConvertable: ', vehicle['isConvertible']);
console.log('value of color: ', vehicle['color']);
console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'Nugget',
  type: 'Dog'
};

delete pet.name;
delete pet.type;

console.log('the value of pet: ', pet);
