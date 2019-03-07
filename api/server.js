const express = require('express');

const hobbits = require('../hobbits/hobbitsModel.js');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.send("I am workingggggg");
});

server.get('/hobbits', async (req, res) => {
  const rows = await hobbits.getAll();

  res.status(200).json(rows);
});

server.post('/hobbits', async (req, res) => {
  const newHob = await hobbits.insert(req.body);
  res.status(200).json(newHob);
});

server.delete('/hobbits/:id', async (req,res) => {
  const id = req.params.id;
  try {
    hobbits.remove(id).then(then => {
      res.status(200).json({message: "this hobbit has been deleted"})
    });
  } catch (error) {
    res.status(500).json({errorMessage: 'error deleting the hobbit'});
  }
});

module.exports = server;
