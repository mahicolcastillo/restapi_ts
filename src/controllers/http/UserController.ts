import { Router, Response, Request } from 'express';
import UserInteractor from '../../core/interactors';
// import { check } from 'express-validator';
// import {
//     postUser
// } from '../controllers/users.controller.js'
// import validateFields from '../middlewares/validateFields.js';
// import Position from '../models/position.js';

const router = Router();

router.post('/', async(req: Request, res: Response) => {
    const body = req.body;
    const { status, data, error } = await UserInteractor.post(body);
    res.status(status).json({data, error});
});

router.get('/', async (req: Request, res: Response) => {
    const { status, data, error } = await UserInteractor.getAll();
    res.status(status).json({ data, error });
});

export default router;