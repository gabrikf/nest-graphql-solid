import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from '../../repositories/user-repository';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticateUser {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}
  async execute(name: string, password: string) {
    const user = await this.userRepository.getByName(name);
    if (!user) {
      return null;
    }
    const passwordHasMatch = await compare(password, user.password);
    if (!passwordHasMatch) {
      return null;
    }
    const payload = { subject: user.id, user_name: user.name };
    return {
      token: this.jwtService.sign(payload),
      user,
    };
  }
}
