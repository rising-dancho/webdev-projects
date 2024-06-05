import User from '../models/user.model.js';
import bcrypt from 'bcrypt';

async function signup(req, res) {
  try {
    const { username, email, password } = req.body;
    const isUserExist = await User.findOne({ email: email });

    if (isUserExist) {
      res.status(400).send({ message: 'Email already exists!' });
    } else {
      const hash = await bcrypt.hash(password, 10);

      // document
      const newUser = new User({
        username,
        email,
        password: hash,
      });

      await User.save();
    }
  } catch (error) {
    console.error(error.message);
  }
}

export { signup };
