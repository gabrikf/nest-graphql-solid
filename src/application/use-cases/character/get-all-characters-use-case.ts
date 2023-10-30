import { Injectable } from '@nestjs/common';
import { CharacterRepository } from 'src/application/repositories/characters-repository';

@Injectable()
export class GetAllCharactersUseCase {
  constructor(private characterRepository: CharacterRepository) {}
  async execute() {
    return this.characterRepository.getAll();
  }
}
