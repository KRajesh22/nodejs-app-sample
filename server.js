'use strict';

const express = require('express');

// Constants
const PORT = 7070;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello guy's, welcome to this new node-js sample application deployment in aws');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
