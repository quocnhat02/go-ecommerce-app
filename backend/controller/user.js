const nodemailer = require('nodemailer');
const User = require('../models/user');
const EmailVerificationToken = require('../models/emailVerificationToken');

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

module.exports = {
  createUser,
};
