import { Module } from '@nestjs/common';
import { CreateUserUseCase } from 'src/application/use-cases/user/create-user-use-case';
import { GetUserById } from 'src/application/use-cases/user/get-user-by-id';
import { DatabaseModule } from '../../../infra/database/database.module';
import { UserResolver } from './user.resolver';

@Module({
  imports: [DatabaseModule],
  providers: [UserResolver, CreateUserUseCase, GetUserById],
  exports: [GetUserById],
})
export class UserModule {}
