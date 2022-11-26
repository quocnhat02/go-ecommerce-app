const nodemailer = require('nodemailer');
const User = require('../models/user');
const EmailVerificationToken = require('../models/emailVerificationToken');
const { isValidObjectId } = require('mongoose');
const user = require('../models/user');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const oldUser = await User.findOne({ email });

  if (oldUser) {
    return res.status(401).json({ error: 'This email is already in use' });
  }

  const newUser = new User({ name, email, password });

  await newUser.save();

  // generate 6 digit otp
  let OTP = '';
  for (let i = 0; i <= 5; i++) {
    const randomVal = Math.round(Math.random() * 9);
    OTP += randomVal;
  }

  // store otp inside our db
  const newEmailVerificationToken = new EmailVerificationToken({
    owner: newUser._id,
    token: OTP,
  });

  await newEmailVerificationToken.save();

  // send that otp to our user
  var transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: 'c3f26a6c41ad28',
      pass: '8f44ef30c2649f',
    },
  });

  transport.sendMail({
    from: 'verification@reviewapp.com',
    to: newUser.email,
    subject: 'Email Verification',
    html: `
      <p>Your verification OTP</p>
      <h1>${OTP}</h1>
    `,
  });

  return res.status(201).json({
    message:
      'Please verify your email. OTP has been sent to your email account!',
  });
};

const verifyEmail = async (req, res) => {
  const { userId, OTP } = req.body;

  if (!isValidObjectId(userId)) {
    return res.json({ error: 'Invalid user!' });
  }

  user = await User.findById(userId);

  if (!user) {
    return res.json({ error: 'User not found!' });
  }

  if (user.isVerified) {
    return res.json({ error: 'User is already verified!' });
  }

  const token = await EmailVerificationToken.findOne({ owner: userId });

  if (!token) {
    return res.json({ error: 'token not found!' });
  }

  const isMatched = token.compareToken(OTP);

  if (!isMatched) {
    return res.json({ error: 'Please submit a valid OTP!' });
  }

  user.isVerified = true;

  await user.save();

  await EmailVerificationToken.findByIdAndDelete(token._id);

  var transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: 'c3f26a6c41ad28',
      pass: '8f44ef30c2649f',
    },
  });

  transport.sendMail({
    from: 'verification@reviewapp.com',
    to: user.email,
    subject: 'Welcome Email',
    html: `<h1>Welcome to our app and thanks for choosing us.</h1>`,
  });

  return res.json({ message: 'Your email is verified.' });
};

module.exports = {
  createUser,
  verifyEmail,
};
