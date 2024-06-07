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
      await newUser.save();

      res.status(201).send({
        message: 'User has been created',
        data: newUser,
      });
    }
  } catch (error) {
    console.error(error.message);
  }
}

async function signin(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(404).send({ message: 'User does not exist.' });
    } else {
      const isPasswordMatched = await bcrypt.compare(password, user.password);

      if (!isPasswordMatched) {
        res.status(400).send({ message: `Password didn't match.` });
      } else {
        res.status(200).send({
          message: 'Login successful',
          data: user,
        });
      }
    }
  } catch (error) {
    console.error(error.message);
  }
}

export { signup, signin };
