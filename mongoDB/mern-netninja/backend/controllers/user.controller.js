import { User } from '../models/user.model.js';
import jwt from 'jsonwebtoken';

function createToken(id) {
  return jwt.sign({ _id: id }, process.env.SECRET, { expiresIn: '3d' }); // user is only logged in for only 3days
}

// login user
async function loginUser(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).send({ email, token });
  } catch (error) {
    res.send({ error: error.message });
  }
}

// signup user
async function signupUser(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).send({ email, token });
  } catch (error) {
    res.send({ error: error.message });
  }
}

export { loginUser, signupUser };
