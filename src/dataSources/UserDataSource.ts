import userRepository from '../core/repositories/userRepository';
import User from '../core/entities/User';
import UserSchema from './mongoose/UserSchema';

class UserDataSource implements userRepository {
    public async getAll(): Promise<User[]> {
        const userSchema: User[] = await UserSchema.find();
        return userSchema;
    }

    // public async post(body:any): Promise<User[]> {
    //     const userSchema: User[] = await UserSchema.save(body);
    // }

    public async post(body: any): Promise<User> {
        const user = new UserSchema(body);
        user.save();

        return user;
        // const userSchema: User = await UserSchema.save(body);
        // return userSchema;
      }
}

export default UserDataSource;