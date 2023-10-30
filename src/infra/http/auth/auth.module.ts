import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../../guards/passport-strategy';
import { UserModule } from '../users/user.module';
import { AuthenticateUser } from 'src/application/use-cases/auth/authenticate-user-use-case';
import { DatabaseModule } from 'src/infra/database/database.module';
import { AuthResolver } from './auth.resolver';
import { jwtConstants } from '../../../infra/guards/constants';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    UserModule,
    DatabaseModule,
  ],
  providers: [AuthResolver, JwtStrategy, AuthenticateUser],
  exports: [JwtStrategy, JwtModule],
})
export class AuthModule {}
