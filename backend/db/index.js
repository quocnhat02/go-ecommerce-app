const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/review_app')
  .then(() => {
    console.log('Database is connected');
  })
  .catch((error) => {
    console.log('Database connection failed: ', error);
  });
