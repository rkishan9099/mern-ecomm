import mongoose from 'mongoose'
mongoose.set('strictQuery', true);

async function  db_connect() {
  const MONGODB_OPTION = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.DATABASE_NAME
  };
  const MONGODB_URL = process.env.MONGODB_URL;
  try {
    await mongoose.connect(MONGODB_URL, MONGODB_OPTION);
    console.log("mongodb connected Successful");
  } catch (error) {
    console.log(error)
  }
}
export default db_connect;
