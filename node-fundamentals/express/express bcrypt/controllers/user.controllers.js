import fs from 'fs';
import { randomUUID } from 'crypto';
import bcrypt from 'bcrypt';

const getAllUsers = (request, response) => {
  const users = JSON.parse(fs.readFileSync('./data.json'));
  response.status(200);
  response.send({
    message: 'List of users',
    data: users,
  });
};

const signup = async (req, res) => {
  const users = JSON.parse(fs.readFileSync('./data.json'));

  const saltRounds = 10;
  const myPlaintextPassword = req.body.password;
  const username = req.body.username;
  const email = req.body.email;

  // Check for duplicate email
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(409).send({ message: 'Email already exists' });
  } else {
    const hash = await bcrypt.hash(myPlaintextPassword, saltRounds);

    const newUser = {
      id: randomUUID(),
      username: username,
      email: email,
      password: hash,
    };

    users.push(newUser);
    fs.writeFileSync('./data.json', JSON.stringify(users));
    res.status(201).send({
      message: 'New user has been created',
      data: newUser,
    });
  }
};

const signin = async (req, res) => {
  const users = JSON.parse(fs.readFileSync('./data.json'));

  // find user:
  const user = users.find((user) => req.body.email === user.email);
  if (!user) {
    return res.status(401).send({ message: 'Email does not exist.' });
  } else {
    const dbPassword = req.body.password;
    const userPassword = user.password;

    const passwordMatch = await bcrypt.compare(dbPassword, userPassword);
    if (passwordMatch) {
      res.status(200).send(user);
    } else {
      res.status(401).send({ message: 'Invalid email/password.' });
    }
  }
};

export { signup, signin, getAllUsers };

/*
  1. create a server
  2. create 2 routes
  - signup
  - signin
  3. signup - create a validation that will not allow duplicate email
  4. signin - promp email does not exist if signed in with email that does not exist in json file
*/
