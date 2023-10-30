import { Field, ObjectType } from '@nestjs/graphql';
import { UserPublic } from '../../users/dto/user.dto';

@ObjectType()
export class CharacterPublic {
  @Field({ nullable: false })
  id: string;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  description: string;

  @Field({ nullable: false })
  imageUrl: string;

  @Field({ nullable: false })
  createdBy: UserPublic;
}
