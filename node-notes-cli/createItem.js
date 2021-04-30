const fs = require('fs');

const createItem = inputedItem1 => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    data = JSON.parse(data);
    const { notes, nextId } = data;
    notes[nextId] = inputedItem1;
    data.nextId++;
    data = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', data, 'utf8', err => {
      if (err) throw err;
    });
  }
  );
};

module.exports = createItem;
