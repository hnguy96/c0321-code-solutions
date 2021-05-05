const express = require('express');
const app = express();
const json = express.json();
let nextId = 2;
const grades = {};

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000..');
});

app.use(json);

app.get('/api/grades', (req, res) => {
  const gradesArr = [];
  for (const id in grades) {
    gradesArr.push(grades[id]);
  }
  res.json(gradesArr);
});

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  req.body.score = parseInt(req.body.score, 10);
  grades[nextId] = req.body;
  nextId++;
  res.status(201).json(req.body);
});
