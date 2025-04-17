// server.js (test_server)
const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', async (req, res) => {
  const response = await axios.get('http://localhost:5000/number');
  res.send(`<h1>Number: ${response.data}</h1>`);
});

app.listen(3000, () => console.log('App running on http://localhost:3000'));
