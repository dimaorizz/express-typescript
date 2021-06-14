import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import usersRouter from './routes/users';
import postsRouter from './routes/posts';

import './mongooseConnection';

const app: express.Application = express();
const PORT: number = Number(process.env.PORT) || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.get('/', (req: express.Request, res: express.Response) => {
  console.log('/');
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});