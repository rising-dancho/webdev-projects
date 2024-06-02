import fs from 'fs';
import { randomUUID } from 'crypto';
import bcrypt from 'bcrypt';

const signup = (req, res) => {
  const users = JSON.parse(fs.readFileSync('./data.json'));

  const saltRounds = 10;
  const myPlaintextPassword = req.body.password;
  const username = req.body.username;
  const email = req.body.email;

  bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
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
  });
};

const signin = async (req, res) => {
  const users = JSON.parse(fs.readFileSync('./data.json'));
  const user = users.find((user) => req.body.email === user.email);

  const myPlaintextPassword = req.body.password;
  const hash = user.password;

  const match = await bcrypt.compare(myPlaintextPassword, hash);
  if (match) {
    res.status(200).send(user);
  } else {
    res.status(400).send({ message: 'Invalid email/password.' });
  }
};

export { signup, signin };
