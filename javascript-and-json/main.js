var books = [{
  isbn: '857485576758',
  title: 'The Big Sleep',
  author: 'Raymond Chandler'
},
{
  isbn: '837584758693',
  title: 'We Begin at the End',
  author: 'Chris Whitaker'
},
{
  isbn: '758375029475',
  title: 'Gone Girl',
  author: 'Gillian Flynn'
}
];

console.log('typeof (books): ', typeof (books));

var objectToJsonString = JSON.stringify(books);
console.log('objectToJsonString: ', objectToJsonString);
console.log('typeof (objectToJsonString):', typeof (objectToJsonString));

var json = '{ "id": 456, "name": "Hien" }';
console.log('json: ', json);
console.log('typeOf (json): ', typeof (json));
console.log('JSON.parse(json): ', JSON.parse(json));
