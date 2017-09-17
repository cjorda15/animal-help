const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/build', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'bundle.js'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(port, () => {
  console.log('app is running on port ' + port);
});
