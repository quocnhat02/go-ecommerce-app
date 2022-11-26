const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello I am from you backend server</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>Hello I am from you backend about</h1>');
});

app.listen(8000, () => {
  console.log('The port is listening on 8000');
});
