import Bull from 'bull';
import dotenv from 'dotenv';
import User, { IUser } from './models/User';
dotenv.config();

const dbQueue = new Bull('db-queue', { redis: { port: process.env.REDIS_PORT, host: process.env.LOCAL_HOST}});

dbQueue.process('create-user', async (job) => {
  const user: IUser = new User(job.data);
  await user.save();
});

export default dbQueue;