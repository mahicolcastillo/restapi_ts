import UserController from './User.controller';

describe('Testing user.controller endpoint', () => {
    describe('getAllUsers', () => {
        test('should return an array of users in data', async() => {
            const userService: any = {
                getAll: jest.fn().mockResolvedValue({
                    status: 200,
                    data: [{id: 1}, {id: 2}],
                    error: {},
                })
            };
            
            const res: any = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };
            
            await UserController(userService).getAllUsers(undefined, res);

            expect(Array.isArray(res.json.mock.calls[0][0].data)).toBe(true);
        });

        test('should return an status code 200', async() => {
            const userService: any = {
                getAll: jest.fn().mockResolvedValue({
                    status: 200,
                    data: [{id: 1}, {id: 2}],
                    error: {},
                }),
            };
            
            const res: any = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };
            
            await UserController(userService).getAllUsers(undefined, res);

            expect(res.status.mock.calls).toEqual([
                [200]
            ]);
        });
    });

    describe('saveUser', () => { 
        test('should return an object with user created', async() => {  
            const userService: any = {
                saveUser: jest.fn().mockResolvedValue({
                    status: 201,
                    data: {
                        name: 'Prueba',
                    },
                    error: {},
                }),
            };

            const req: any = {
                body: 'request body',
            }

            const res: any = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            await UserController(userService).saveUser(req, res);

            expect(typeof res.json.mock.calls[0][0].data).toBe('object');
        });

        test('should return an status code 201', async() => {  
            const userService:any = {
                saveUser: jest.fn().mockResolvedValue({
                    status: 201,
                    data: {
                        name: 'Prueba',
                    },
                    error: {},
                }),
            };

            const req: any = {
                body: {
                    name: 'Prueba'
                },
            }

            const res: any = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            await UserController(userService).saveUser(req, res);

            expect(res.status.mock.calls[0][0]).toBe(201);
        });

        test('should be called with an object in the body', async() => {  
            const userService: any = {
                saveUser: jest.fn().mockResolvedValue({
                    status: 201,
                    data: {
                        name: 'Prueba',
                    },
                    error: {},
                }),
            };

            const req: any = {
                body: {
                    name: 'Prueba'
                },
            }

            const res: any = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            await UserController(userService).saveUser(req, res);

            expect(typeof userService.saveUser.mock.calls[0][0]).toBe('object');
        });
    });
});