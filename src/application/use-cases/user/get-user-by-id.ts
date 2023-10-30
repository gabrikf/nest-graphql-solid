import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repositories/user-repository';

@Injectable()
export class GetUserById {
  constructor(private userRepository: UserRepository) {}
  async execute(id: string) {
    const user = await this.userRepository.getById(id);
    if (!user) {
      return null;
    }
    return user;
  }
}
