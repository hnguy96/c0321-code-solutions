const fs = require('fs');

const readItem = inputedItem1 => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    data = JSON.parse(data);
    const { notes } = data;
    for (const i in notes) {
      console.log(`${i}: ${notes[i]}`);
    }
  }
  );
};

module.exports = readItem;
