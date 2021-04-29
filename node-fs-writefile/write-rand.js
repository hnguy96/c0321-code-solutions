const fs = require('fs');
const randomNum = Math.random();

fs.writeFile('random.txt', randomNum + '\n', 'utf8', err => {
  if (err) throw err;
});
