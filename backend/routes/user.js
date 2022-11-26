const express = require('express');
const { createUser, verifyEmail } = require('../controller/user');
const { userValidator, validate } = require('../middlewares/validator');

const router = express.Router();

router.route('/').post(userValidator, validate, createUser);
router.route('/verify-email').post(verifyEmail);
module.exports = router;
