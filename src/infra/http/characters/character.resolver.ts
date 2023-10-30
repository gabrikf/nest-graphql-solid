import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CharacterPublic } from './dto/character.dto';
import { CharacterInput } from './dto/character-input.dto';
import { CreateCharacterUseCase } from '../../../application/use-cases/character/create-character-use-case';
import { GetAllCharactersUseCase } from '../../../application/use-cases/character/get-all-characters-use-case';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../guards/jwt-auth-guard';

@Resolver((of) => CharacterPublic)
export class CharacterResolver {
  constructor(
    private readonly createCharacterUseCase: CreateCharacterUseCase,
    private readonly getAllCharactersUseCase: GetAllCharactersUseCase,
  ) {}

  @Mutation((returns) => CharacterPublic, { name: 'createCharacter' })
  @UseGuards(JwtAuthGuard)
  async createCharacter(@Args('input') input: CharacterInput) {
    return this.createCharacterUseCase.execute(input);
  }

  @Query(() => [CharacterPublic], { name: 'getAllCharacters' })
  @UseGuards(JwtAuthGuard)
  async getAllCharacters(): Promise<CharacterPublic[]> {
    return this.getAllCharactersUseCase.execute();
  }
}
