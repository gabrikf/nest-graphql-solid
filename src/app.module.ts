import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { CharacterModule } from './infra/http/characters/characters.module';
import { UserModule } from './infra/http/users/user.module';
import { AuthModule } from './infra/http/auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      context: ({ req, res }) => ({ req, res }),
    }),
    CharacterModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
