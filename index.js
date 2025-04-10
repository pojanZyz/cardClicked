import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {router} from './src/router/cardRouter.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/card', router);
app.use('/', (req, res) => {
    res.send('Welcome to the Card API!');
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
})

export default app;