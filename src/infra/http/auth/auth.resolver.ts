import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthenticateUser } from 'src/application/use-cases/auth/authenticate-user-use-case';
import { AuthPublic } from '../auth/dto/auth.dto';
import { AuthInput } from './dto/auth-input.dto';

@Resolver((of) => AuthPublic)
export class AuthResolver {
  constructor(private readonly authenticateUser: AuthenticateUser) {}

  @Mutation((returns) => AuthPublic, { name: 'login' })
  async login(@Args('input') input: AuthInput) {
    return this.authenticateUser.execute(input.name, input.password);
  }
}
