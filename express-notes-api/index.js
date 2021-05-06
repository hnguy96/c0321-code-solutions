const express = require('express');
const fs = require('fs');
// const json = require('./data.json');
const app = express();
const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000..');
});

app.get('/api/notes', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    data = JSON.parse(data);
    const { notes } = data;
    const notesArr = [];
    for (const i in notes) {
      notesArr.push(notes[i]);
    }
    res.json(notesArr);
  });
});

app.get('/api/notes/:id', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    data = JSON.parse(data);
    const { notes } = data;
    if (req.params.id < 0) res.status(400).json({ error: 'id must be a positive integer' });
    for (const i in notes) {
      if (notes[i].id.toString() === req.params.id) res.status(200).json(notes[i]);
      else res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
    }
  });
});

app.post('/api/notes', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) res.status(500).json({ error: 'An unexpected error occurred.' });
    else {
      if (!req.body.content) res.status(400).json({ error: 'content is a required field' });
      else res.status(201).json(req.body);
    }
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  fs.readFile('./data.json', 'utf8', (err, data) => {
    data = JSON.parse(data);
    const { notes } = data;
    // console.log(notes);
    if (err) res.status(500).json({ error: 'An unexpected error occurred.' });
    else if (id < 0) {
      res.status(400).json({ error: 'id must be a positive integer' });
    } else {
      for (const i in notes) {
        if (notes[i].id === id) {
        // delete notes[i];
          // console.log(notes[i]);
          res.status(204).json(req.body);
        }
        // else {
        //       res.status(404).json({ error: `cannot find note with id ${id}` });
        //       return;
        //     }
        //   }
      }
    }
  });
});

// app.put('/api/notes/:id', (req, res) => {
//   fs.readFile('./data.json', 'utf8', (err, data) => {
//     data = JSON.parse(data);
//     // const { notes } = data;
//     if (err) res.status(500).json({ error: 'An unexpected error occurred.' });
//     else {
//       if (req.params.id < 0) res.status(400).json({ error: 'id must be a positive integer' });
//       else if (!req.body.content) res.status(400).json({ error: 'content is a required field' });
//     }
//   });
// });
