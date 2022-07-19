import UserInteractor from './services/User.service';
import UserDataSource from '../infrastructure/User.datasource';

const userDataSource = new UserDataSource();
const userInteractor = new UserInteractor(userDataSource);

export default userInteractor;