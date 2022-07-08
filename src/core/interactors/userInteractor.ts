import UserRepository from '../repositories/userRepository';
import UserEntity from '../entities/User';
import { HTTP_STATUS } from '../const/http';
import { IResponse } from './IResponse';
import bcryptjs from 'bcryptjs';

class UserInteractor {
  userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async getAll(): Promise<IResponse<UserEntity[]>> {
    try {
      const userModel = await this.userRepository.getAll();
      return { status: HTTP_STATUS.OK, data: userModel };
    } catch (e) {
      return { status: HTTP_STATUS.INTERNAL_ERROR, error: e.message };
    }
  }

  async post(body: any): Promise<IResponse<UserEntity | undefined>> {
    console.log(body);
    
    const userModel: UserEntity = {
        name            : body.name,
        surnameFather   : body.surnameFather,
        surnameMother   : body.surnameMother,
        email           : body.email,
        username        : body.username,
        password        : body.password
    }

    const response = await this.userRepository.post(userModel);

    // const isEmailExists     = await User.findOne({email: body.email});
    // if(isEmailExists){
    //     return response.status(400).json({
    //         message: "This email is already registered",
    //     });
    // }

    // const isUsernameExists  = await User.findOne({username: body.username});   
    // if(isUsernameExists){
    //     return response.status(400).json({
    //         message: "This username is already registered",
    //     });
    // }

    const salt = bcryptjs.genSaltSync(10);
    userModel.password = bcryptjs.hashSync(userModel.password, salt);

    // await user.save();
    
    // response.status(201).json({
    //     message: 'User created successfully',
    //     user,
    // });


    return { status: HTTP_STATUS.OK, data: response };
  }
}

export default UserInteractor;