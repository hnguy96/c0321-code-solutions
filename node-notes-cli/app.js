// const fs = require('fs');
const readItem = require('./readItem');
const createItem = require('./createItem');
const deleteItem = require('./deleteItem');
const updateItem = require('./updateItem');
const feature = process.argv[2];
const inputedItem1 = process.argv[3];
const inputedItem2 = process.argv[4];

if (feature === 'read') readItem(inputedItem1);
else if (feature === 'create') createItem(inputedItem1);
else if (feature === 'delete') deleteItem(inputedItem1);
else if (feature === 'update') updateItem(inputedItem1, inputedItem2);
else console.log('invalid, please input read, create, delete, or update');
