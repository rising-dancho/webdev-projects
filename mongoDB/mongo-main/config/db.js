import { connect } from "mongoose";

const db = async () => {
  try {
    const {
      connection: { host },
    } = await connect(process.env.MONGODB_URI);
    console.log(`Database connection: ${host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

export default db;