const express = require('express');
const r = express.Router();

r.get('/api/v1', weather);

module.exports = r;
