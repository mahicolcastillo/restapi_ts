import UserService from './User.service';
import UserEntity from '../../domain/User.entity';

describe('Testing user.service', () => {
    describe('getAll', () => {
        test('should return array of objects of users', async() => {
            const userRepository: any = {
                getAll: jest.fn().mockResolvedValue([
                    { id: 1 },
                    { id: 2 },
                ])
            };

            const userService = new UserService(userRepository);
            const response = await userService.getAll();
            
            expect(Array.isArray(response.data)).toBe(true);
        });

        test('should return status code 200', async() => {  
            const userRepository: any = {
                getAll: jest.fn().mockResolvedValue([
                    { id: 1 },
                    { id: 2 },
                ])
            };

            const userService = new UserService(userRepository);
            const response = await userService.getAll();
            
            expect(response.status).toBe(200);
        });

        test('should return status code 500', async() => {
            const userRepository: any = {
            };

            const userService = new UserService(userRepository);
            const response = await userService.getAll();

            expect(response.status).toBe(500);
        });

        test('should return string error', async() => {
            const userRepository: any = {
            };

            const userService = new UserService(userRepository);
            const response = await userService.getAll();

            expect(typeof response.error).toBe("string");
        });
    });

    describe('saveUser', () => {  
        test('should return the user created', async() => { 
            const user: UserEntity = {
                name            : 'test',
                surnameFather   : 'test',
                surnameMother   : 'test',
                email           : 'test',
                username        : 'test',
                password        : 'test'
            };

            const userRepository: any = {
                saveUser: jest.fn().mockResolvedValue([
                    { id: 1 },
                ])
            };

            const userService = new UserService(userRepository);
            const response = await userService.saveUser(user);

            expect(Array.isArray(response.data)).toBe(true);
        });

        test('should return status code 201', async() => { 
            const user: UserEntity = {
                name            : 'test',
                surnameFather   : 'test',
                surnameMother   : 'test',
                email           : 'test',
                username        : 'test',
                password        : 'test'
            };

            const userRepository: any = {
                saveUser: jest.fn().mockResolvedValue([
                    { id: 1 },
                ])
            };

            const userService = new UserService(userRepository);
            const response = await userService.saveUser(user);

            expect(response.status).toBe(201);
        });

        test('should return status code 500', async() => {
            const user: UserEntity = {
                name            : 'test',
                surnameFather   : 'test',
                surnameMother   : 'test',
                email           : 'test',
                username        : 'test',
                password        : 'test'
            };

            const userRepository: any = {
            };

            const userService = new UserService(userRepository);
            const response = await userService.saveUser(user);

            expect(response.status).toBe(500);
        });
    })
});