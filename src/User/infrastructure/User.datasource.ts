import userRepository from '../domain/User.repository';
import User from '../domain/User.entity';
import UserSchema from './User.schema';

class UserDataSource implements userRepository {
    public async getAll(): Promise<User[]> {
        const userSchema: User[] = await UserSchema.find();
        return userSchema;
    }

    // public async post(body:any): Promise<User[]> {
    //     const userSchema: User[] = await UserSchema.save(body);
    // }

    //p.u.
    public async isEmailExist(mail: string): Promise<boolean>{
        const mailExist: boolean = await UserSchema.findOne({email: mail});
        return mailExist;
    }

    public async save(body: User): Promise<User> {
        // try {
            const user = new UserSchema(body);
            
            await user.save();
        
            return user;
        // } catch (error) {
        //     return error;
        // }

        

    // const isUsernameExists  = await UserSchema.findOne({username: body.username});   
    // if(isUsernameExists){
    //     return response.status(400).json({
    //         message: "This username is already registered",
    //     });
    // }

      }
}

export default UserDataSource;