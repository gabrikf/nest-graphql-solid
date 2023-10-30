import { UserInput } from '../dtos/user/user-input.dto';
import { User, UserWithPassword } from '../dtos/user/user.dto';

export abstract class UserRepository {
  abstract create(input: UserInput): Promise<User>;
  abstract getById(id: string): Promise<User>;
  abstract getByName(name: string): Promise<UserWithPassword>;
}
