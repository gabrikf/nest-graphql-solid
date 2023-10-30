import { Field, InputType } from '@nestjs/graphql';
import { IsUUID, IsUrl, Length } from 'class-validator';

@InputType()
export class CharacterInput {
  @Field()
  @IsUUID()
  name: string;

  @Field()
  @Length(3)
  description: string;

  @Field()
  @Length(3)
  @IsUrl()
  imageUrl: string;

  @Field()
  @IsUUID()
  createdById: string;
}
