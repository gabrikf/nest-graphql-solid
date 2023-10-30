import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserPublic {
  @Field({ nullable: false })
  id: string;

  @Field({ nullable: false })
  name: string;
}
