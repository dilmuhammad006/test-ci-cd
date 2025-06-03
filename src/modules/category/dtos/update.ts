import { Field, InputType } from '@nestjs/graphql';
import { Transform } from 'class-transformer';

@InputType()
export class UpdateCategoryDto {
  @Field({})
  name: string;

  @Field({})
  description: string;

  @Field({})
  @Transform(({ value }) => {
    return parseInt(value);
  })
  id: number;
}
