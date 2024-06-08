import { connect } from 'mongoose';

async function db() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;
    if (!MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined');
    }

    const conn = await connect(MONGODB_URI);
    const host = conn.connection.host;
    console.log(`Database connection established: ${host}`);

    // connection events: listens to connected, error, disconnected
    conn.connection.on('connected', () => {
      console.log('Mongoose connected to ' + uri);
    });

    conn.connection.on('error', (err) => {
      console.log('Mongoose connection error: ' + err);
    });

    conn.connection.on('disconnected', () => {
      console.log('Mongoose disconnected');
    });
  } catch (error) {
    console.error(`Error connecting to the database: ${error.message}`);
    process.exit(1);
  }
}

export default db;
