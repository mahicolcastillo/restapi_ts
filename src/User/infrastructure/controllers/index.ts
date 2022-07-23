import { Router } from 'express';

import UserService from '../../application';
import UserController from './User.controller';

const router = Router();

const userController = UserController(UserService);
router.post('/', userController.saveUser);
router.get('/', userController.getAllUsers);

export default router;