const express = require('express');
require('./db');
const userRouter = require('./routes/user');

const app = express();

app.use(express.json());

app.use('/api/v1/user', userRouter);

app.post(
  '/api/v1/sign-in',
  (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ error: 'email/password missing!' });
    }

    next();
  },
  (req, res) => {
    return res.json({ user: req.body });
  }
);

app.listen(8000, () => {
  console.log('The port is listening on 8000');
});
