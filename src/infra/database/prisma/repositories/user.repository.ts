import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../../../application/repositories/user-repository';
import { PrismaService } from '../prisma.service';
import { UserInput } from '../../../../application/dtos/user/user-input.dto';
import { UserWithPassword } from '../../../../application/dtos/user/user.dto';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prismaService: PrismaService) {}

  async create(input: UserInput) {
    return this.prismaService.user.create({
      data: input,
    });
  }
  async getById(id: string) {
    return this.prismaService.user.findFirst({
      where: {
        id,
      },
    });
  }
  async getByName(name: string): Promise<UserWithPassword> {
    return this.prismaService.user.findFirst({
      where: {
        name,
      },
    });
  }
}
