const express = require('express');
const {
  createUser,
  verifyEmail,
  resendEmailVerificationToken,
} = require('../controller/user');
const { userValidator, validate } = require('../middleware/validator');

const router = express.Router();

router.route('/create').post(userValidator, validate, createUser);
router.route('/verify-email').post(verifyEmail);
router
  .route('/resend-email-verification-token')
  .post(resendEmailVerificationToken);
module.exports = router;
