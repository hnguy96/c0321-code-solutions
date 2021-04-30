const fs = require('fs');

const deleteItem = inputedItem1 => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    data = JSON.parse(data);
    const { notes } = data;
    for (const i in notes) {
      if (i === inputedItem1) {
        delete notes[i];
      }
    }
    data = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', data, 'utf8', err => {
      if (err) throw err;
    });
  }
  );
};

module.exports = deleteItem;
