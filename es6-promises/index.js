const takeAChance = require('./take-a-chance');
const person1 = takeAChance('Hien');
person1.then(value => {
  console.log(value);
});
person1.catch(error => {
  console.log(error.message);
});
