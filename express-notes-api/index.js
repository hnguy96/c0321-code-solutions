const express = require('express');
const app = express();
const notes = [
  {
    content: 'The event loop is how a JavaScript runtime pushes asynchronous callbacks onto the stack once the stack is cleared.',
    id: 1
  },
  {
    content: 'Prototypal inheritance is how JavaScript objects delegate behavior.',
    id: 2
  }
];

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000..');
});

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
  if (req.params.id < 0) {
    res.status(400).json({ error: 'ID must be a positive integer' });
  } else {
    for (let i = 0; i < notes.length; i++) {
      if (req.params.id === notes[i].id.toString()) {
        res.status(200).json(notes[i]);
      } else {
        res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
      }
    }
  }
});
