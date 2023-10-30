import { Field, InputType } from '@nestjs/graphql';
import { IsUUID, Length } from 'class-validator';

@InputType()
export class UserInput {
  @Field()
  @IsUUID()
  name: string;

  @Field()
  @Length(3)
  password: string;
}
