const usersServices = require('../services/users');
const { status, intServerError } = require('../Helpers/status&messages');
const { generateToken } = require('../Helpers/authorizations');

const create = async (req, res) => {
  try {
    const { id, displayName, email, password, image } = req.body;
    await usersServices.create(id, displayName, email, password, image);
    const token = generateToken();
    return res.status(status.create).json({ token: token });
  } catch (error) {
    return res.status(status.intServerError).json({ message: intServerError.unknown })
  }
};

module.exports = { create }
