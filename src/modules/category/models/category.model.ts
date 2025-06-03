import { Field, ObjectType } from '@nestjs/graphql';
import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Menyu } from 'src/modules/menyu';

@ObjectType()
@Table({ tableName: 'categories', timestamps: true })
export class Category extends Model {
  @Field({})
  @Column({})
  name: string;

  @Field({})
  @Column({})
  description: string;

  @Field({})
  declare createdAt: string;

  @Field({})
  declare updatedAt: string;

  @Field(() => [Menyu], { nullable: true })
  @HasMany(() => Menyu)
  food: Menyu[];
}
