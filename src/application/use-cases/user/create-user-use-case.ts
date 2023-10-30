import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repositories/user-repository';
import { hash } from 'bcryptjs';
import { UserInput } from '../../../application/dtos/user/user-input.dto';

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(input: UserInput) {
    const password = await hash(input.password, 8);
    const user = this.userRepository.create({
      ...input,
      password,
    });
    return user;
  }
}
