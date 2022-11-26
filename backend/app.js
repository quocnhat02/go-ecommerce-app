const express = require('express');
require('./db');
const userRouter = require('./routes/user');

const app = express();

app.use(express.json());

app.use('/api/v1/user', userRouter);

app.listen(8000, () => {
  console.log('The port is listening on 8000');
});
