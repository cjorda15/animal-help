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
  const { animal, size, sex, age, location } = req.query;
  let query = `&location=${location}`;
  // let query = `&location=${80237}`;

  !sex || sex == 'both' ? null : (query += `&sex=${sex}`);
  !age || age == 'any' ? null : (query += `&age=${age}`);
  !size || size == 'any' ? null : (query += `&size=${size}`);
  !animal || animal == 'any' ? null : (query += `&animal=${animal}`);
  fetch(
    `http://api.petfinder.com/pet.find?key=${process.env
      .API_KEY}${query}&format=json`
  )
    .then(data => data.json())
    .then(data => res.send(data))
    .catch(err => console.log('internal error', err));
});

app.listen(port, () => {
  console.log('app is running on port ' + port);
});
