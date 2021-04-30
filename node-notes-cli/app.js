const fs = require('fs');
const feature = process.argv[2];
const newNote = process.argv[3];

fs.readFile('./data.json', 'utf8', (err, data) => {
  if (err) throw err;
  data = JSON.parse(data);
  const { notes, nextId } = data;
  if (feature === 'read') {
    for (const i in notes) {
      console.log(`${i}: ${notes[i]}`);
    }
  }
  if (feature === 'create') {
    notes[nextId] = newNote;
    data.nextId++;
    data = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', data, 'utf8', err => {
      if (err) throw err;
    });
  }
});
