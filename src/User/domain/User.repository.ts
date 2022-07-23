import User from './User.entity';

interface UserRepository {
  saveUser(body: User): Promise<User>;
  getAll(): Promise<User[]>;
  isEmailExist(mail: string): Promise<boolean>;
}
export default UserRepository;