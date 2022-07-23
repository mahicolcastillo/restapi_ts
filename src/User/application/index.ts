import UserService from './services/User.service';
import UserDataSource from '../infrastructure/database/User.datasource';

const userDataSource = new UserDataSource();
const userService = new UserService(userDataSource);

export default userService;