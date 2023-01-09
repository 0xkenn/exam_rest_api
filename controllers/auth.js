const jwt = require('jsonwebtoken');

// Import models
const User = require('../models/user');

// Login
exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err) res.status(500).send(err);
    if (!user) res.status(404).send('User not found');
    if (user.password !== password)
      res.status(401).send('Incorrect password');
    jwt.sign({ user }, 'secretkey', (err, token) => {
      if (err) res.status(500).send(err);
      res.status(200).json({ token });
    });
  });
};
