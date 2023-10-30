import { CharacterInput } from '../dtos/character/character-input.dto';
import { Character } from '../dtos/character/character.dto';

export abstract class CharacterRepository {
  abstract create(input: CharacterInput): Promise<Character>;
  abstract getAll(): Promise<Character[]>;
  abstract getById(id: string): Promise<Character>;
}
