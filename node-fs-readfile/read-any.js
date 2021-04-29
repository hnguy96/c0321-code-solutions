const fs = require('fs');
const txtFile = process.argv[2];

fs.readFile(txtFile, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
