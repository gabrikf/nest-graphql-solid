import { User } from '../user/user.dto';
import { CharacterInput } from './character-input.dto';

export class Character extends CharacterInput {
  id: string;
  createdBy: User;
}
