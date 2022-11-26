const express = require('express');
const userRouter = require('./routes/user');

const app = express();

app.use('/api/v1/', userRouter);

app.get('/about', (req, res) => {
  res.send('<h1>Hello I am from you backend about</h1>');
});

app.listen(8000, () => {
  console.log('The port is listening on 8000');
});
