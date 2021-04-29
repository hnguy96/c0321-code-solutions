const fs = require('fs');
const feature = process.argv[2];

if (feature === 'read') {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    data = JSON.parse(data);
    const { notes } = data;
    for (const i in notes) {
      console.log(`${i}: ${notes[i]}`);
    }
  });
}
