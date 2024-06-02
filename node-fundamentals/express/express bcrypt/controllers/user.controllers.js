import fs from 'fs';
import { randomUUID } from 'crypto';
import bcrypt from 'bcrypt';

const signup = async (req, res) => {
  const users = JSON.parse(fs.readFileSync('./data.json'));

  const saltRounds = 10;
  const myPlaintextPassword = req.body.password;
  const username = req.body.username;
  const email = req.body.email;

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
};

const signin = async (req, res) => {
  const users = JSON.parse(fs.readFileSync('./data.json'));

  // find user:
  const user = users.find((user) => req.body.email === user.email);

  const dbPassword = req.body.password;
  const userPassword = user.password;

  const passwordMatch = await bcrypt.compare(dbPassword, userPassword);
  if (passwordMatch) {
    res.status(200).send(user);
  } else {
    res.status(401).send({ message: 'Invalid email/password.' });
  }
};

const getAllUsers = (request, response) => {
  const users = JSON.parse(fs.readFileSync('./data.json'));
  response.status(200);
  response.send({
    message: 'List of users',
    data: users,
  });
};

export { signup, signin, getAllUsers };

/*
  1. create a server
  2. create 2 routes


*/