import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cardRouter from './src/router/cardRouter.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/card', cardRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
})