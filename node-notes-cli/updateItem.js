const fs = require('fs');

const updateItem = (inputedItem1, inputedItem2) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    data = JSON.parse(data);
    const { notes } = data;
    for (const i in notes) {
      if (i === inputedItem1) {
        notes[i] = inputedItem2;
      }
    }
    data = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', data, 'utf8', err => {
      if (err) throw err;
    });
  }
  );
};

module.exports = updateItem;
