import UserRepository from '../../domain/User.repository';
import UserEntity from '../../domain/User.entity';
import { HTTP_STATUS } from './utils/http';
import { IResponse } from './utils/IResponse';
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

  async save(user: UserEntity): Promise<IResponse<UserEntity | undefined>> {
    const userModel: UserEntity = {
        name            : user.name,
        surnameFather   : user.surnameFather,
        surnameMother   : user.surnameMother,
        email           : user.email,
        username        : user.username,
        password        : user.password
    }

    // const isEmailExist = await this.userRepository.isEmailExist(user.email);
    // if(isEmailExist) return {status: HTTP_STATUS.INTERNAL_ERROR, error: 'Already email exist'};

    try {
      const salt = bcryptjs.genSaltSync(10);
      userModel.password = bcryptjs.hashSync(userModel.password, salt);

      const response = await this.userRepository.save(userModel);
      // console.log(response);
      
      return { status: HTTP_STATUS.OK, data: response };
    } catch (error) {
      return { status: HTTP_STATUS.INTERNAL_ERROR, error};
    }

    


    // await user.save();
    
    // response.status(201).json({
    //     message: 'User created successfully',
    //     user,
    // });


  }
}

export default UserInteractor;