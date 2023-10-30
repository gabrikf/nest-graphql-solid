import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthenticateUser } from 'src/application/use-cases/auth/authenticate-user-use-case';
import { CreateUserUseCase } from '../../../application/use-cases/user/create-user-use-case';
import { UserInput } from './dto/user-input.dto';
import { UserPublic } from './dto/user.dto';

@Resolver((of) => UserPublic)
export class UserResolver {
  constructor(private readonly userService: CreateUserUseCase) {}

  @Mutation((returns) => UserPublic, { name: 'createUser' })
  async createUser(@Args('input') input: UserInput) {
    return this.userService.execute(input);
  }

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
