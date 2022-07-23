import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoConnect from './mongoose/index';
dotenv.config();

import UserController from '../User/infrastructure/controllers/index';
import ProductController from '../Product/infrastructure/controllers/index';

const app = express();
const portApi = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoConnect();

app.get('/', (req: Request, res: Response) => {
    res.json('Its Works');
});

app.use('/users', UserController);
app.use('/products', ProductController);

app.listen(portApi, () => {
    console.log(`Server started on port ${portApi}`);
});