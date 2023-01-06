import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import db from './config/Database.js';
import router from './routes/index.js';
const app = express();
dotenv.config();
try {
  await db.authenticate();
  console.log('Database Connected ....');
} catch (error) {
  console.log(error);
}

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);
app.listen(5000, () => console.log('Server Running at port 5000'));
