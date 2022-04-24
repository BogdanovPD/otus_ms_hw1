'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/health', (req, res) => {
  res.send('{"status": "OK"}');
});

app.listen(PORT, HOST);