import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateMenyuDto {
  @Field({})
  name: string;

  @Field({})
  price: number;
}
