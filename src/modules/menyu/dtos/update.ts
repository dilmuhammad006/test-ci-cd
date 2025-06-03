import { Field, InputType } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
@InputType()
export class UpdateMenyuDto {
  @Field({})
  name: string;

  @Field({})
  price: number;

  @Field({})
  @Transform(({ value }) => {
    parseInt(value);
  })
  id: number;
}
