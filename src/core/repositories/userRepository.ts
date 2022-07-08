import User from '../entities/User';

interface UserRepository {
  post(body: object): Promise<User>;
  getAll(): Promise<User[]>;
}
export default UserRepository;