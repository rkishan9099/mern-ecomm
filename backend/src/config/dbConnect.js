import mongoose from 'mongoose'
mongoose.set('strictQuery', true);
const connectDB = async ()=> {
  const MONGODB_OPTION = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.DATABASE_NAME
  };
  const MONGODB_URL = process.env.MONGODB_URL;
  try {
    return await mongoose.connect(MONGODB_URL,MONGODB_OPTION);
  } catch (error) {
    console.log(error)
  }
}
export default connectDB;