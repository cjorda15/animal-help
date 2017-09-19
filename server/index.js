const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(bodyParser.json());

app.get('/build', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'bundle.js'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.get('/pets', (req, res) => {
  console.log('hit');
  const { animal, size, sex, age, location } = req.query;
  // fetch(
  //   `http://api.petfinder.com/pet.find?key=${process.env
  //     .API_KEY}&animal=${animal}&size=${size}&sex=${sex}&age=${age}&location=80237&format=json`
  // )
  fetch(
    'http://api.petfinder.com/pet.find?key=2083011f1f5787d56005725f94057fc9&location=80237&format=json'
  )
    .then(data => data.json())
    .then(data => res.send(data))
    // .then(data => res.send(data.body))
    .catch(err => console.log('internal error'));
  // res.json({ GRRR: 'MEOW' });
});

app.listen(port, () => {
  console.log('app is running on port ' + port);
});
