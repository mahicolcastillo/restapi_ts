import express from 'express';
import { Request, Response } from 'express';
import mongoConnect from '../dataSources/mongoose';
import UserController from '../controllers/http/UserController';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const portApi = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoConnect();

app.get('/', (req: Request, res: Response) => {
    res.json('Its Works');
});

app.use('/users', UserController);

app.listen(portApi, () => {
    console.log(`Server started on port ${portApi}`);
});