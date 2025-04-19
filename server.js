// server.js
const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:5000/number');
    res.send(`
      <html>
        <head><title>Number Viewer</title></head>
        <body>
          <h1>Number from repo2</h1>
          <p data-testid="random-number">${response.data}</p>
        </body>
      </html>
    `);
  } catch (error) {
    res.status(500).send('Failed to fetch number');
  }
});

app.listen(3000, () => console.log('App running on http://localhost:3000'));
