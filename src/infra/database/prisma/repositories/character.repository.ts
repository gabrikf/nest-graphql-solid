import { Injectable } from '@nestjs/common';
import { CharacterRepository } from '../../../../application/repositories/characters-repository';
import { PrismaService } from '../prisma.service';
import { CharacterInput } from '../../../../application/dtos/character/character-input.dto';
import { Character } from '../../../../application/dtos/character/character.dto';

@Injectable()
export class PrismaCharacterRepository implements CharacterRepository {
  constructor(private prismaService: PrismaService) {}
  async create(input: CharacterInput): Promise<Character> {
    return this.prismaService.character.create({
      data: input,
      include: {
        createdBy: true,
      },
    });
  }
  async getAll(): Promise<Character[]> {
    return this.prismaService.character.findMany({
      include: {
        createdBy: true,
      },
    });
  }
  async getById(id: string): Promise<Character> {
    return this.prismaService.character.findFirst({
      where: {
        id,
      },
      include: {
        createdBy: true,
      },
    });
  }
}
