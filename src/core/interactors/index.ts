import UserInteractor from './userInteractor';
import UserDataSource from '../../dataSources/UserDataSource';

const userDataSource = new UserDataSource();
const userInteractor = new UserInteractor(userDataSource);

export default userInteractor;