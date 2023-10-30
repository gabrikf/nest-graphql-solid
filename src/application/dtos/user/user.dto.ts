import { UserInput, UserInputWithoutPassword } from './user-input.dto';

export class User extends UserInputWithoutPassword {
  id: string;
}

export class UserWithPassword extends UserInput {
  id: string;
}
