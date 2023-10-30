import { Injectable } from '@nestjs/common';
import { CharacterRepository } from '../../repositories/characters-repository';
import { CharacterInput } from '../../../application/dtos/character/character-input.dto';

@Injectable()
export class CreateCharacterUseCase {
  constructor(private characterRepository: CharacterRepository) {}

  async execute(input: CharacterInput) {
    const character = await this.characterRepository.create(input);
    return character;
  }
}
