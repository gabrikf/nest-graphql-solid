import { Field, ObjectType } from '@nestjs/graphql';
import { UserPublic } from '../../users/dto/user.dto';

@ObjectType()
export class AuthPublic {
  @Field({ nullable: false })
  user: UserPublic;

  @Field({ nullable: false })
  token: string;
}
