import fs from 'fs';
import { randomUUID } from 'crypto';

const addBlob = (request, response) => {
  const blobs = JSON.parse(fs.readFileSync('./data.json'));

  const newBlog = {
    id: randomUUID(),
    user: request.body.user,
    text: request.body.text,
    image: {
      path: request.file.path,
      filename: request.file.originalname,
    },
  };

  blobs.push(newBlog);
  fs.writeFileSync('./data.json', JSON.stringify(blobs));

  response.status(201).send({
    message: 'New blog created.',
    data: newBlog,
  });
};

export { addBlob };
