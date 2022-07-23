import { Response, Request } from 'express';
import UserService from '../../application/services/User.service';

const UserController = (userService: UserService) => ({
    getAllUsers: async(req: Request, res: Response) => {
        const { status, data, error } = await userService.getAll();
        res.status(status).json({ data, error });
    },
    saveUser: async(req: Request, res: Response) => {
        const body = req.body;
        const { status, data, error } = await userService.saveUser(body);

        res.status(status).json({data, error});
    },
});

export default UserController;