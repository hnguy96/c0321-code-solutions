const fs = require('fs');
const fileData = process.argv[2];

fs.writeFile('note.txt', fileData + '\n', 'utf8', err => {
  if (err) throw err;
});
