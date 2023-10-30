import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { CharacterRepository } from '../../application/repositories/characters-repository';
import { PrismaCharacterRepository } from './prisma/repositories/character.repository';
import { PrismaUserRepository } from './prisma/repositories/user.repository';
import { UserRepository } from '../../application/repositories/user-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: CharacterRepository,
      useClass: PrismaCharacterRepository,
    },
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [CharacterRepository, UserRepository],
})
export class DatabaseModule {}
