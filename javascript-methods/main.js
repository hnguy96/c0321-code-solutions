var num1 = 5;
var num2 = 12;
var num3 = 2;

var maximumValue = Math.max(num1, num2, num3);
console.log('maximum value: ', maximumValue);

var heroes = ['Iron Man', 'Black Widow', 'Wanda Maximoff', 'Spider-Man'];
var randomNumber = Math.random();
randomNumber = heroes.length * randomNumber;
var randomIndex = Math.floor(randomNumber);

console.log('randomIndex: ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero: ', randomHero);

var library = [
  {
    title: 'The Family Upstairs',
    author: 'Lisa Jewell'
  },
  {
    title: 'Outliers',
    author: 'Malcolm Gladwell'
  },
  {
    title: 'The Glass Castle',
    author: 'Jeannette Walls'
  }
];

var lastBook = library.pop();
console.log('lastBook: ', lastBook);

var firstBook = library.shift();
console.log('firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(0, 1);

console.log('library: ', library);

var fullName = 'Hien' + ' ' + 'Nguyen';
var firstAndLastName = fullName.split(' ');

console.log('firstAndLastName: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('sayMyName: ', sayMyName);
