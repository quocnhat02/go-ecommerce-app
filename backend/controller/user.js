const createUser = (req, res) => {
  res.json({ user: req.body });
};

module.exports = {
  createUser,
};
