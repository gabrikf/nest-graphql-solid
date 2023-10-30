import { Module } from '@nestjs/common';
import { CreateCharacterUseCase } from 'src/application/use-cases/character/create-character-use-case';
import { DatabaseModule } from '../../../infra/database/database.module';
import { CharacterResolver } from './character.resolver';
import { GetAllCharactersUseCase } from 'src/application/use-cases/character/get-all-characters-use-case';

@Module({
  imports: [DatabaseModule],
  providers: [
    CharacterResolver,
    CreateCharacterUseCase,
    GetAllCharactersUseCase,
  ],
})
export class CharacterModule {}
