const express = require('express');
const { createUser } = require('../controller/user');
const { userValidator, validate } = require('../middlewares/validator');

const router = express.Router();

router.route('/').post(userValidator, validate, createUser);

module.exports = router;
